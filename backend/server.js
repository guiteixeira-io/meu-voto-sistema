import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "meu_voto",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

let pool;

// Inicializar conexão com banco
async function initDatabase() {
  try {
    pool = mysql.createPool(dbConfig);
    console.log("✅ Conectado ao MySQL");
  } catch (error) {
    console.error("❌ Erro ao conectar com MySQL:", error);
    process.exit(1);
  }
}

// Rotas da API

// GET /api/politicians - Buscar todos os políticos
app.get("/api/politicians", async (req, res) => {
  try {
    const { tag, search } = req.query;

    let query = `
      SELECT p.*, 
             JSON_OBJECT(
               'efficiency', JSON_OBJECT(
                 'score', p.efficiency_score,
                 'problemsAssigned', p.problems_assigned,
                 'resolutionRate', p.resolution_rate,
                 'publicRating', p.public_rating,
                 'resolvedProblems', p.resolved_problems
               ),
               'officialPerformance', JSON_OBJECT(
                 'score', p.official_score,
                 'votingAttendance', p.voting_attendance,
                 'sessionAttendance', p.session_attendance,
                 'transparency', p.transparency,
                 'projectsApproved', p.projects_approved
               ),
               'publicReputation', JSON_OBJECT(
                 'score', p.reputation_score,
                 'judicialStatus', p.judicial_status,
                 'scandalInvolvement', p.scandal_involvement,
                 'factCheckScore', p.fact_check_score,
                 'mediaRating', p.media_rating
               )
             ) as metrics,
             (SELECT JSON_ARRAYAGG(tag_name) FROM politician_tags pt WHERE pt.politician_id = p.id) as tags,
             (SELECT JSON_ARRAYAGG(JSON_OBJECT('type', ra.type, 'title', ra.title, 'status', ra.status, 'vote', ra.vote, 'date', ra.date)) 
              FROM recent_actions ra WHERE ra.politician_id = p.id) as recentActions,
             (SELECT JSON_ARRAYAGG(proposal) FROM politician_proposals pp WHERE pp.politician_id = p.id) as proposals,
             (SELECT JSON_ARRAYAGG(achievement) FROM politician_achievements pa WHERE pa.politician_id = p.id) as achievements
      FROM politicians p
    `;

    const params = [];

    if (tag) {
      query += ` WHERE p.id IN (SELECT politician_id FROM politician_tags WHERE tag_name = ?)`;
      params.push(tag);
    }

    if (search) {
      const searchCondition = tag ? " AND" : " WHERE";
      query += `${searchCondition} (p.name LIKE ? OR p.position LIKE ? OR p.bio LIKE ?)`;
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    query += " ORDER BY p.name";

    const [rows] = await pool.execute(query, params);

    // Processar dados para o formato esperado pelo frontend
    const politicians = rows.map((row) => ({
      ...row,
      metrics: JSON.parse(row.metrics),
      tags: JSON.parse(row.tags) || [],
      recentActions: JSON.parse(row.recentActions) || [],
      proposals: JSON.parse(row.proposals) || [],
      achievements: JSON.parse(row.achievements) || [],
    }));

    res.json(politicians);
  } catch (error) {
    console.error("Erro ao buscar políticos:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// GET /api/politicians/:id - Buscar político específico
app.get("/api/politicians/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const query = `
      SELECT p.*, 
             JSON_OBJECT(
               'efficiency', JSON_OBJECT(
                 'score', p.efficiency_score,
                 'problemsAssigned', p.problems_assigned,
                 'resolutionRate', p.resolution_rate,
                 'publicRating', p.public_rating,
                 'resolvedProblems', p.resolved_problems
               ),
               'officialPerformance', JSON_OBJECT(
                 'score', p.official_score,
                 'votingAttendance', p.voting_attendance,
                 'sessionAttendance', p.session_attendance,
                 'transparency', p.transparency,
                 'projectsApproved', p.projects_approved
               ),
               'publicReputation', JSON_OBJECT(
                 'score', p.reputation_score,
                 'judicialStatus', p.judicial_status,
                 'scandalInvolvement', p.scandal_involvement,
                 'factCheckScore', p.fact_check_score,
                 'mediaRating', p.media_rating
               )
             ) as metrics,
             (SELECT JSON_ARRAYAGG(tag_name) FROM politician_tags pt WHERE pt.politician_id = p.id) as tags,
             (SELECT JSON_ARRAYAGG(JSON_OBJECT('type', ra.type, 'title', ra.title, 'status', ra.status, 'vote', ra.vote, 'date', ra.date)) 
              FROM recent_actions ra WHERE ra.politician_id = p.id) as recentActions,
             (SELECT JSON_ARRAYAGG(proposal) FROM politician_proposals pp WHERE pp.politician_id = p.id) as proposals,
             (SELECT JSON_ARRAYAGG(achievement) FROM politician_achievements pa WHERE pa.politician_id = p.id) as achievements
      FROM politicians p 
      WHERE p.id = ?
    `;

    const [rows] = await pool.execute(query, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Político não encontrado" });
    }

    const politician = {
      ...rows[0],
      metrics: JSON.parse(rows[0].metrics),
      tags: JSON.parse(rows[0].tags) || [],
      recentActions: JSON.parse(rows[0].recentActions) || [],
      proposals: JSON.parse(rows[0].proposals) || [],
      achievements: JSON.parse(rows[0].achievements) || [],
    };

    res.json(politician);
  } catch (error) {
    console.error("Erro ao buscar político:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// GET /api/tags - Buscar todas as tags disponíveis
app.get("/api/tags", async (req, res) => {
  try {
    const query = `
      SELECT DISTINCT tag_name, COUNT(*) as count 
      FROM politician_tags 
      GROUP BY tag_name 
      ORDER BY count DESC, tag_name
    `;

    const [rows] = await pool.execute(query);
    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar tags:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota de teste
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API Meu Voto funcionando",
    timestamp: new Date().toISOString(),
  });
});

// Inicializar servidor
async function startServer() {
  await initDatabase();

  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📊 API disponível em http://localhost:${PORT}/api`);
  });
}

startServer().catch((error) => {
  console.error("❌ Erro ao iniciar servidor:", error);
  process.exit(1);
});

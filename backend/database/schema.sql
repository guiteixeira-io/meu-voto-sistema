-- Criação do banco de dados Meu Voto
CREATE DATABASE IF NOT EXISTS meu_voto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE meu_voto;

-- Tabela principal de políticos
CREATE TABLE politicians (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    party VARCHAR(100) DEFAULT '',
    position VARCHAR(255) NOT NULL,
    photo VARCHAR(500),
    age INT,
    location VARCHAR(255),
    experience VARCHAR(100),
    bio TEXT,
    
    -- Métricas de eficiência
    efficiency_score INT DEFAULT 0,
    problems_assigned INT DEFAULT 0,
    resolution_rate INT DEFAULT 0,
    public_rating DECIMAL(3,1) DEFAULT 0.0,
    resolved_problems INT DEFAULT 0,
    
    -- Performance oficial
    official_score INT DEFAULT 0,
    voting_attendance INT DEFAULT 0,
    session_attendance INT DEFAULT 0,
    transparency INT DEFAULT 0,
    projects_approved INT DEFAULT 0,
    
    -- Reputação pública
    reputation_score INT DEFAULT 0,
    judicial_status VARCHAR(100) DEFAULT 'Limpa',
    scandal_involvement INT DEFAULT 0,
    fact_check_score INT DEFAULT 0,
    media_rating VARCHAR(100) DEFAULT 'Neutra',
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de tags dos políticos
CREATE TABLE politician_tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    politician_id INT NOT NULL,
    tag_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (politician_id) REFERENCES politicians(id) ON DELETE CASCADE,
    UNIQUE KEY unique_politician_tag (politician_id, tag_name)
);

-- Tabela de ações recentes
CREATE TABLE recent_actions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    politician_id INT NOT NULL,
    type ENUM('projeto', 'votacao', 'problema') NOT NULL,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(100),
    vote VARCHAR(100),
    date DATE NOT NULL,
    FOREIGN KEY (politician_id) REFERENCES politicians(id) ON DELETE CASCADE
);

-- Tabela de propostas
CREATE TABLE politician_proposals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    politician_id INT NOT NULL,
    proposal TEXT NOT NULL,
    FOREIGN KEY (politician_id) REFERENCES politicians(id) ON DELETE CASCADE
);

-- Tabela de conquistas/realizações
CREATE TABLE politician_achievements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    politician_id INT NOT NULL,
    achievement TEXT NOT NULL,
    FOREIGN KEY (politician_id) REFERENCES politicians(id) ON DELETE CASCADE
);

-- Índices para melhor performance
CREATE INDEX idx_politicians_name ON politicians(name);
CREATE INDEX idx_politicians_position ON politicians(position);
CREATE INDEX idx_politician_tags_tag ON politician_tags(tag_name);
CREATE INDEX idx_recent_actions_date ON recent_actions(date);

-- View para busca completa de políticos
CREATE VIEW v_politicians_complete AS
SELECT 
    p.*,
    GROUP_CONCAT(DISTINCT pt.tag_name) as tags_list,
    COUNT(DISTINCT ra.id) as total_actions,
    COUNT(DISTINCT pp.id) as total_proposals,
    COUNT(DISTINCT pa.id) as total_achievements
FROM politicians p
LEFT JOIN politician_tags pt ON p.id = pt.politician_id
LEFT JOIN recent_actions ra ON p.id = ra.politician_id
LEFT JOIN politician_proposals pp ON p.id = pp.politician_id
LEFT JOIN politician_achievements pa ON p.id = pa.politician_id
GROUP BY p.id;
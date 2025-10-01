// Configurações do Google OAuth
// Para obter essas credenciais:
// 1. Acesse https://console.cloud.google.com/
// 2. Crie um projeto ou selecione um existente
// 3. Ative a Google Identity API
// 4. Vá em "Credenciais" > "Criar credenciais" > "ID do cliente OAuth 2.0"
// 5. Configure o tipo como "Aplicação da web"
// 6. Adicione http://localhost:5173 nas "Origens JavaScript autorizadas"
// 7. Copie o Client ID gerado e adicione no arquivo .env

export const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com";

export const isDevelopment = import.meta.env.MODE === "development";

// Validação para desenvolvimento
if (
  isDevelopment &&
  GOOGLE_CLIENT_ID === "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com"
) {
  console.warn(
    "⚠️ Google Client ID não configurado! " +
      "Copie .env.example para .env e configure VITE_GOOGLE_CLIENT_ID"
  );
}

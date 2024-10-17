// server.js
const express = require('express');
const cookieParser = require('cookie-parser');
const { OAuth2Client } = require('google-auth-library');
const app = express();
const PORT = 5000;

// Cliente OAuth2 do Google
const client = new OAuth2Client('SUA_CLIENT_ID_GOOGLE');

// Middleware para parsing JSON e cookies
app.use(express.json());
app.use(cookieParser());

// Simulando um banco de dados de sessões
const validSessions = {
  'session123': { user: 'Edson', cashbackEligible: true }
};

// Valida o token Google e o IP
async function verifyGoogleToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: 'SUA_CLIENT_ID_GOOGLE',
  });
  const payload = ticket.getPayload();
  return payload; // Retorna informações do usuário
}

// Rota de cashback
app.post('/api/cashback', async (req, res) => {
  const { ip, cookie, googleToken } = req.body;

  try {
    // Verificar o token Google
    const userInfo = await verifyGoogleToken(googleToken);
    console.log('Usuário autenticado:', userInfo);

    // Validar cookie de sessão
    if (!cookie || !validSessions[cookie]) {
      return res.status(401).json({ message: 'Usuário não autenticado ou sessão inválida' });
    }

    // Verificar se o usuário pode receber cashback
    const userSession = validSessions[cookie];
    if (userSession.cashbackEligible) {
      return res.status(200).json({ message: `Cashback processado para o usuário ${userInfo.name}` });
    } else {
      return res.status(403).json({ message: 'Usuário não elegível para cashback' });
    }
  } catch (error) {
    return res.status(401).json({ message: 'Token Google inválido', error });
  }
});

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

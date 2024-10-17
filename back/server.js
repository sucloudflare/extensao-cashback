// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database'); // Importa o arquivo do banco de dados

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Rota para solicitar cashback
app.post('/api/cashback', (req, res) => {
    const { ip, userToken } = req.body; // Supondo que o amount seja definido de alguma forma
    const amount = 10.00; // Exemplo de valor de cashback

    const sql = `INSERT INTO cashback_requests (ip, user_token, amount) VALUES (?, ?, ?)`;
    db.run(sql, [ip, userToken, amount], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, amount });
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Cria ou abre um banco de dados SQLite
const db = new sqlite3.Database(path.resolve(__dirname, 'cashback.db'), (err) => {
    if (err) {
        console.error("Erro ao abrir o banco de dados:", err.message);
    } else {
        console.log("Conectado ao banco de dados SQLite.");
    }
});

// Criação da tabela cashback_requests
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS cashback_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ip TEXT NOT NULL,
        user_token TEXT NOT NULL,
        amount REAL NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
        if (err) {
            console.error("Erro ao criar tabela:", err.message);
        } else {
            console.log("Tabela cashback_requests criada ou já existe.");
        }
    });
});

// Exporta o banco de dados para ser usado em outros arquivos
module.exports = db;

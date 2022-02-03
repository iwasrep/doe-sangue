const express = require("express");
const server = express();

// Configurar o servidor para mostrar arquivos extras
server.use(express.static("../frontend/assets/"));

// Habilitar o corpo do formulário
server.use(express.urlencoded({ extended: true }));

// Configurar banco de dados PostgreSQL
const Pool = require("pg").Pool;
const db = new Pool({
    user: "postgres",
    password: "Dol19sk8@",
    host: "localhost",
    port: 5432,
    database: "doesangue",
});

// Configuração do Template Engine
const nunjucks = require("nunjucks");
nunjucks.configure("../frontend/", {
    express: server,
    noCache: true,
});

server.get("/", function(req, res) {
    db.query("SELECT * FROM doadores ORDER BY id DESC", function(err, result) {
        // Se não conectar
        if (err) return res.send("Erro ao buscar doadores cadastrados");

        // Se conectar
        const doadores = result.rows;
        // Envia para a página
        return res.render("./index.html", { doadores });
    });
});

server.post("/", function(req, res) {
    // Pega os dados do formulário
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const tipo = req.body.tipo;

    if (nome == "" || email == "" || telefone == "" || tipo == "") {
        return res.send("Todos os campos são obrigatórios!");
    }

    const query = `INSERT INTO doadores ("nome", "email", "telefone", "tipo") VALUES ($1, $2, $3, $4)`;

    const values = [nome, email, telefone, tipo];

    db.query(query, values, function(err) {
        // Se não cadastrar
        if (err) return res.send("Erro ao cadastrar");

        // Se der tudo certo...
        return res.redirect("/");
    });
});

server.listen(3002, function() {
    console.log("Servidor Iniciado");
});
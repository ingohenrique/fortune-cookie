const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.get("/quebrarBiscoito", (req, res) => {
    res.send({
        frase: sortearItem(frases)
    })
});

module.exports = { app, server, io };

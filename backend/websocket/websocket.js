const { Server } = require('socket.io');
const { sortearItem, frases } = require('../biscoito');
const { server } = require('../config/server');

module.exports = (io) => {
    io = new Server(server, {
        cors: {origin: "*"},
    })
  io.on('connection', (socket) => {
    console.log('Usuário conectado: ', socket.id);

    socket.on('disconnect', () => {
      console.log('Usuário desconectado');
    });
    

    socket.on('sendMessage', (message) => {
      console.log('Mensagem recebida: ', message);
      io.emit('newMessage', message); 
    });

    socket.on('quebrarBiscoito', (nome) => {
        const frase = sortearItem(frases);
        io.emit("fraseBiscoito", { frase, nome });
      });
  });
};

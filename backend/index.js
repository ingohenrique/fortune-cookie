const { app, server, io } = require('./config/server');
const apiRoutes = require('./routes/apiRoutes');
const setupWebSocket = require('./websocket/websocket');

app.use('/api', apiRoutes);
setupWebSocket(server);

const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});

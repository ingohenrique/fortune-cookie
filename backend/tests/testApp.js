const { app } = require("../config/server");
const apiRoutes = require("../routes/apiRoutes");

// Health check geral
app.get("/", (req, res) => {
  res.json({
    message: "Fortune Cookie Server está rodando!",
    status: "online",
    timestamp: new Date().toISOString(),
    services: {
      api: "/api",
      websocket: "Socket.IO conectado",
    },
  });
});

// Registra as rotas da API para os testes
app.use("/api", apiRoutes);

module.exports = app;

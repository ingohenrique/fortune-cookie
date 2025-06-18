const { app, server, io } = require("./config/server");
const apiRoutes = require("./routes/apiRoutes");
const setupWebSocket = require("./websocket/websocket");

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

app.use("/api", apiRoutes);
setupWebSocket(io);

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});

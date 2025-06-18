const request = require("supertest");
const app = require("./testApp");

describe("API Routes", () => {
  describe("GET /", () => {
    test("deve retornar status do servidor", async () => {
      const response = await request(app).get("/").expect(200);

      expect(response.body).toMatchObject({
        message: "Fortune Cookie Server está rodando!",
        status: "online",
        services: {
          api: "/api",
          websocket: "Socket.IO conectado",
        },
      });
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe("GET /api", () => {
    test("deve retornar informações da API", async () => {
      const response = await request(app).get("/api").expect(200);

      expect(response.body).toMatchObject({
        message: "Fortune Cookie API funcionando!",
        version: "1.0.0",
        endpoints: ["GET /api/ - Status da API"],
      });
    });
  });
});

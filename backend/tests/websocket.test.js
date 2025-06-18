const setupWebSocket = require("../websocket/websocket");
const { frases } = require("../biscoito");

describe("WebSocket", () => {
  let mockSocket;
  let mockIo;

  beforeEach(() => {
    mockSocket = {
      id: "test-socket-id",
      on: jest.fn(),
      emit: jest.fn(),
    };

    mockIo = {
      on: jest.fn(),
      emit: jest.fn(),
    };
  });

  test("deve configurar listeners do socket corretamente", () => {
    setupWebSocket(mockIo);

    expect(mockIo.on).toHaveBeenCalledWith("connection", expect.any(Function));
  });

  test("deve lidar com conexão de usuário", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    setupWebSocket(mockIo);

    // Simula uma conexão
    const connectionHandler = mockIo.on.mock.calls[0][1];
    connectionHandler(mockSocket);

    expect(mockSocket.on).toHaveBeenCalledWith(
      "disconnect",
      expect.any(Function)
    );
    expect(mockSocket.on).toHaveBeenCalledWith(
      "sendMessage",
      expect.any(Function)
    );
    expect(mockSocket.on).toHaveBeenCalledWith(
      "quebrarBiscoito",
      expect.any(Function)
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Usuário conectado: ",
      "test-socket-id"
    );

    consoleSpy.mockRestore();
  });

  test("deve lidar com evento quebrarBiscoito", () => {
    setupWebSocket(mockIo);

    // Simula conexão e obtém o handler
    const connectionHandler = mockIo.on.mock.calls[0][1];
    connectionHandler(mockSocket);

    // Encontra o handler do quebrarBiscoito
    const quebrarBiscoitoHandler = mockSocket.on.mock.calls.find(
      (call) => call[0] === "quebrarBiscoito"
    )[1];

    // Simula evento
    quebrarBiscoitoHandler("João");

    expect(mockIo.emit).toHaveBeenCalledWith(
      "fraseBiscoito",
      expect.objectContaining({
        nome: "João",
        frase: expect.any(String),
      })
    );

    // Verifica se a frase está no array de frases
    const emitCall = mockIo.emit.mock.calls[0];
    expect(frases).toContain(emitCall[1].frase);
  });

  test("deve lidar com desconexão", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    setupWebSocket(mockIo);

    const connectionHandler = mockIo.on.mock.calls[0][1];
    connectionHandler(mockSocket);

    // Encontra e executa o handler de disconnect
    const disconnectHandler = mockSocket.on.mock.calls.find(
      (call) => call[0] === "disconnect"
    )[1];

    disconnectHandler();

    expect(consoleSpy).toHaveBeenCalledWith("Usuário desconectado");

    consoleSpy.mockRestore();
  });
});

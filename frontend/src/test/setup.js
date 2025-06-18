import "@testing-library/jest-dom";

// Mock do socket.io-client
vi.mock("../socket", () => ({
  default: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
}));

// Mock do react-toastify
vi.mock("react-toastify", () => ({
  toast: {
    info: vi.fn(),
    warn: vi.fn(),
    success: vi.fn(),
    error: vi.fn(),
  },
  ToastContainer: () => null,
}));

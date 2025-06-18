# 🔧 Backend - Fortune Cookie API

Servidor Node.js com API REST e WebSocket para o aplicativo de Biscoito da Sorte colaborativo.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Socket.IO** - WebSocket para comunicação em tempo real
- **CORS** - Permitir requisições cross-origin

## 🔧 Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Rodar testes
npm test
```

## 📡 Endpoints da API

- `GET /` - Status da API
- `GET /api` - Status da API

## 🔄 WebSocket Events

- `connection` - Usuário conecta
- `disconnect` - Usuário desconecta
- `quebrarBiscoito` - Recebe nome do usuário
- `fraseBiscoito` - Emite frase + nome para todos

## 📁 Estrutura

```
├── config/         # Configuração do servidor
├── routes/         # Rotas da API
├── websocket/      # Lógica do WebSocket
├── tests/          # Testes unitários e de integração
├── biscoito.js     # 96 frases da sorte
└── index.js        # Entrada principal
```

O servidor roda na porta 3000 por padrão e aceita conexões de múltiplos clientes simultaneamente.

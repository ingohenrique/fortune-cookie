# 🍪 Fortune Cookie

Uma aplicação web interativa onde múltiplos usuários podem quebrar biscoitos da sorte e ver em tempo real quando outros usuários fazem o mesmo.

## 🌐 Links do Projeto

- **Frontend:** [https://fortune-cookie-nine.vercel.app](https://fortune-cookie-nine.vercel.app)
- **Backend:** [https://fortune-cookie-production-d8e8.up.railway.app](https://fortune-cookie-production-d8e8.up.railway.app)

## 🚀 Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Socket.IO** - Comunicação WebSocket em tempo real
- **CORS** - Permitir requisições cross-origin

### Frontend

- **React.js** - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **Socket.IO Client** - Cliente WebSocket
- **React Toastify** - Notificações toast

## 📁 Estrutura do Projeto

```
├── backend/
│   ├── config/         # Configurações do servidor
│   ├── routes/         # Rotas da API
│   ├── websocket/      # Lógica do WebSocket
│   ├── biscoito.js     # Frases dos biscoitos
│   └── index.js        # Entrada principal
└── frontend/
    ├── src/
    │   ├── Pages/      # Componentes das páginas
    │   └── socket.js   # Configuração do Socket.IO
    └── package.json
```

## 🛠️ Como Rodar Localmente

### Pré-requisitos

- Node.js (versão 16+)
- npm ou yarn

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd fiap-frontend-engineering
```

### 2. Configure o Backend

```bash
cd backend
npm install
npm run dev
```

O servidor rodará em `http://localhost:3000`

### 3. Configure o Frontend

```bash
cd frontend
npm install

# Configure a variável de ambiente
cp env.example .env
# Edite o .env com a URL do seu backend

npm run dev
```

O frontend rodará em `http://localhost:5173`

## 🎮 Como Usar

1. Acesse o frontend no navegador
2. Digite seu nome no campo
3. Clique em "Quebrar Biscoito"
4. Veja sua frase da sorte aparecer
5. Receba notificações quando outros usuários quebrarem biscoitos!

## 🌐 Funcionalidades

- ✅ Quebrar biscoito da sorte personalizado
- ✅ Notificações em tempo real para todos os usuários
- ✅ Interface simples e intuitiva
- ✅ Suporte a múltiplos usuários simultâneos

## 🔄 Comunicação em Tempo Real

A aplicação utiliza **WebSocket** via Socket.IO para:

- Notificar todos os usuários quando alguém quebra um biscoito
- Sincronizar eventos em tempo real
- Manter conexão persistente entre cliente e servidor

## 🧪 Testes

O projeto inclui testes unitários e de integração para garantir a qualidade do código.

### Frontend (Vitest + React Testing Library)

```bash
cd frontend
npm test              # Roda todos os testes
npm run test:ui       # Interface visual dos testes
```

**Cobertura de testes:**

- ✅ Renderização do componente Biscoito
- ✅ Estados do botão (habilitado/desabilitado)
- ✅ Interações do usuário (input, clique, Enter)
- ✅ Eventos WebSocket
- ✅ Notificações toast

### Backend (Jest + Supertest)

```bash
cd backend
npm test              # Roda todos os testes
npm run test:watch    # Modo watch para desenvolvimento
```

**Cobertura de testes:**

- ✅ Rotas da API (GET /, GET /api)
- ✅ Funções do biscoito da sorte (sortearItem, validação)
- ✅ WebSocket (conexão, desconexão, eventos)
- ✅ Lógica de negócio das frases

## 🚀 Deploy

### 1. Backend (Railway)

1. **Conecte seu repositório** ao Railway
2. **Configure as variáveis de ambiente:**
   ```
   PORT=3000
   ALLOWED_ORIGINS=https://seu-frontend.vercel.app
   ```
3. **Deploy automático** do backend

### 2. Frontend (Vercel)

1. **Conecte seu repositório** ao Vercel
2. **Configure as variáveis de ambiente:**
   ```
   VITE_BACKEND_URL=https://seu-backend.railway.app
   ```
3. **Deploy automático** do frontend

### 3. Configuração local para produção

```bash
# Backend
cd backend
cp env.example .env
# Edite o .env com suas URLs de produção

# Frontend
cd frontend
cp env.example .env
# Edite o .env com a URL do seu backend
```

---

**Desenvolvido para FIAP - Front-end Engineering**

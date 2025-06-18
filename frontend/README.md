# 🍪 Frontend - Fortune Cookie

Interface web do aplicativo de Biscoito da Sorte colaborativo.

## 🚀 Tecnologias

- **React.js** - Interface de usuário
- **Vite** - Build tool e servidor de desenvolvimento
- **Socket.IO Client** - Comunicação WebSocket em tempo real
- **React Toastify** - Notificações

## 🔧 Como rodar

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp env.example .env
# Edite o .env com a URL do backend

# Rodar em desenvolvimento
npm run dev

# Rodar testes
npm test
```

## 📱 Funcionalidades

- Interface moderna com gradientes e animações
- Campo de nome com validação
- Botão para quebrar biscoito (clique ou Enter)
- Notificações em tempo real de outros usuários
- Design responsivo para mobile

O frontend se conecta ao backend via WebSocket para receber atualizações em tempo real quando outros usuários quebram biscoitos da sorte.

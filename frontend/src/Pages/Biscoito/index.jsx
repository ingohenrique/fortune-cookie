import { useEffect, useState } from "react";
import socket from "../../socket";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export function Biscoito() {
  const [frase, setFrase] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    socket.on('fraseBiscoito', (data) => {
      if (data.nome === nome) {
        setFrase(data.frase);
      }
  
      toast.info(`${data.nome} quebrou um biscoito da sorte! 🍪`);
    });
  
    return () => {
      socket.off('fraseBiscoito');
    };
  }, [nome]);

  const quebrarBiscoito = () => {
    if (!nome.trim()) {
      toast.warn("Por favor, digite seu nome antes de quebrar o biscoito!");
      return;
    }
  
    socket.emit('quebrarBiscoito', nome);
  };

  return (
    <div className="container">
      <h1>🍪 Quebrar Biscoito da Sorte</h1>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="nome-input"
      />

      <button onClick={quebrarBiscoito} disabled={!nome.trim()}>
        Quebrar Biscoito
      </button>

      {frase && <p className="frase">“{frase}”</p>}

      <ToastContainer />
    </div>
  );
}

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('API de tarefas funcionando!');
});

router.post('/createTask', (req, res) => {
  const { task } = req.body;
  res.status(201).json({ message: 'Tarefa criada com sucesso', task });
});

module.exports = router;

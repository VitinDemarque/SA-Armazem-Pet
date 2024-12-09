const express = require('express');
const app = express();
const PORT = 3001;

// Middleware para lidar com JSON
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('API do Armazém Pet funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//middleware para processar JSON
app.use(express.json());
app.get('/api',categoriaRoutes);

//inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
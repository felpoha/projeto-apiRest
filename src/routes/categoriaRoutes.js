const express = require("express");
const CategoriasController = require("../controllers/categoriaController");

const router = express.Router();

router.get("/categorias", CategoriasController.listarTodasAsCategorias);
module.exports = router;
const express = require("express");
const { getServicos } = require("./DAO/TabelaDAO");


const router = express.Router();

router.get("/", async (request, response) => {
  const dados = await getServicos();
  return response.json({dados:dados.rows});
});

module.exports = router;

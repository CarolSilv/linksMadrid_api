const express = require("express");
const { getServicosAtivos } = require("./DAO/TabelaDAO");


const router = express.Router();

router.get("/ativos", async (request, response) => {
  const dados = await getServicosAtivos();
  return response.json({ dados: dados.rows });
});

module.exports = router;

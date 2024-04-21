const express = require("express");
const { getServicosAtivos, getServicos, insertAcesso } = require("./DAO/TabelaDAO");


const router = express.Router();

const contadorMiddleware = (req, res, next) => {
    insertAcesso()
    next();
};


router.use('/ativos',contadorMiddleware)

router.get("/ativos", async (request, response) => {
  const dados = await getServicosAtivos();
  return response.json({
    dados: dados.rows
  });
});

module.exports = router;

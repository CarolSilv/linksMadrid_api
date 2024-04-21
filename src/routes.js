const express = require("express");
const { getServicosAtivos, getServicos, insertAcesso, insertServico } = require("./DAO/TabelaDAO");


const router = express.Router();

const contadorMiddleware = async (req, res, next) => {
  insertAcesso()
  next();
};


router.use('/servico/ativos', contadorMiddleware)

router.get("/servico/ativos", async (request, response) => {
  const dados = await getServicosAtivos();
  return response.json({
    dados: dados.rows
  });
});


router.post("/servico", async (request, response) => {
  const { nome, telefone, instagram, bloco_apt, servico_prestado, descricao_servico, whatsapp } = request.body
  await insertServico(nome, telefone, instagram, bloco_apt, servico_prestado, descricao_servico, whatsapp)
  return response.json({
    success: true,
    message: "Cadastro feito com sucesso."
  });
});

module.exports = router;

const express = require("express");
const { getServicosAtivos } = require("./DAO/TabelaDAO");
const { getProfilePhoto } = require("./Utils/getInstagramPhoto");


const router = express.Router();

router.get("/ativos", async (request, response) => {

  const dados = await getServicosAtivos()?.rows;

  return response.json({
    dados: dados.map((i) => {
      return ({
        ...dados,
        instagramPhoto: dados.instagram ? getProfilePhoto(dados.instagram) : false
      }
      )
    })
  });
});

module.exports = router;

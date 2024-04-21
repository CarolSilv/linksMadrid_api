const { pool } = require("./connection")

async function getServicos() {
  const con = pool()

  const query = `SELECT * FROM public.servicos_madrid;`
  const data = await con.query(query)
  con.end()
  return data

}

async function getServicosAtivos() {
  const con = pool()
  const query = `SELECT * FROM public.servicos_madrid where ativo = 'true';`
  const data = await con.query(query)
  con.end()
  return data

}

async function insertServico(nome, telefone, instagram, bloco_apt, servico_prestado, descricao_servico, whatsapp){
  const con = pool()

  const idUser = randomUUID()
  const query = `INSERT INTO public.servicos_madrid(id,nome,telefone,instagram,bloco_apt, servico_prestado,descricao_servico,whatsapp)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8)`
    const data = await con.query(query, [idUser, nome, telefone, instagram, bloco_apt, servico_prestado, descricao_servico, whatsapp]);
    con.end()
    return data
}

async function countAcessos(){
  const con = pool()

  const query = `SELECT * FROM public.servicos_madrid WHERE ativo = true;`
  const data = await con.query(query)
  con.end()
  return data
}

module.exports = { getServicos,getServicosAtivos }


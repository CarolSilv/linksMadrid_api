const getDataHoraBrasil = require("../Utils/dataHoraBr")
const { pool } = require("./connection")
const {randomUUID} = require("node:crypto")
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
  const query = `INSERT INTO public.servicos_madrid(id,nome,telefone,instagram,bloco_apt, servico_prestado,descricao_servico,whatsapp)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8)`
    const data = await con.query(query, [randomUUID(), nome, telefone, instagram, bloco_apt, servico_prestado, descricao_servico, whatsapp]);
    con.end()
    return data
}

async function insertAcesso(){
  const con = pool()
  const query = `INSERT INTO public.acessos(created_at)
    VALUES($1)`
    const data = await con.query(query, [getDataHoraBrasil()]);
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

module.exports = { getServicos,getServicosAtivos,insertAcesso,insertServico }


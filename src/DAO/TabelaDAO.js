const { pool } = require("./connection")

async function getServicos() {
  const con = pool()

  const query = `SELECT * FROM public.servicos_madrid;`
  const data = await con.query(query)
  con.end()
  return data

}

module.exports = { getServicos }
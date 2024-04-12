const postgres = require("postgres");
require("dotenv").config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

// Exportando a função getPgVersion
module.exports = { getPgVersion };

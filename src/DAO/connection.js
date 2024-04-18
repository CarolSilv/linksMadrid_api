const pg = require('pg');
const conConf = require('./dbconf');
// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
// const conString = `postgres://${PGUSER}:${PGHOST}@${PGHOST}/${PGDATABASE}`;

function pool() {
    try {
        return new pg.Pool(conConf)
    } catch (error) {
        throw new Error(`Erro: ${error}`);
    }
}

module.exports = { pool };

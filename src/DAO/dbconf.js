let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const conConf = {
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
};
module.exports = conConf;

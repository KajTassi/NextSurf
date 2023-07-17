const Pool = require("pg").Pool;

//change database

const pool = new Pool({
    user: "vutwayxp",
    password: "ywZg0XUWNFO9Ygv3ZWyDm8uvOf2tClmJ",
    host: "mahmud.db.elephantsql.com",
    port: 5432,
    database: "vutwayxp"
});

module.exports = pool;
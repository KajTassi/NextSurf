const Pool = require("pg").Pool;

const pool = new Pool({
    user: "zzuajsqe",
    password: "bS6ZEKnzSWiOLsYsuAXl09BR8T-RXy8c",
    host: "kashin.db.elephantsql.com",
    port: 5432,
    database: "zzuajsqe"
});

module.exports = pool;
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:root@localhost:5432/armscor')
module.exports = db;
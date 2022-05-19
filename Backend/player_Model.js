const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  database: 'reacttest',
  user: 'tspruillreact',
  password: 'root',
  port: 5432,
});



  const getPlayers = () => pool.query('SELECT * FROM player')
  const getPlayerByName = (name) => pool.query("SELECT * FROM player WHERE name LIKE $1",['%'+ name + '%'])
  module.exports = {
    getPlayers,
    getPlayerByName
  }
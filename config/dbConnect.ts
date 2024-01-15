const mysql = require("mysql");

const config = {
  host: "localhost",
  user: process.env.USER_ID,
  password: process.env.USER_PW,
  database: process.env.DATABASE,
};

const connection = mysql.createConnection(config);

connection.connect(function (err: any) {
  if (err) throw err;
  console.log("db connected");
});
module.exports = connection;

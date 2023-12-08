const express = require('express')
const app = express()
const con = require('./app/database/connect')

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/Test1', function (req, res) {
  res.set
  con.query("Select answer.idAnswer as id, question.Question as question, answer.Option1 as option1, answer.Option2 as option2,  answer.Option3 as option3,  answer.Option4 as option4, answer.Answer as answer from test join question on test.idTest = question.idTest right join answer on answer.idQuestion = question.idQuestion where test.idTest = 1;", function (err, result, fields) {
    if (err) throw err;
    console.log(result.data);
    res.send(result)
  });
})

app.get('/Test2', function(req, res) {
  con.query("Select answer.idAnswer as id, question.Question as question, answer.Option1 as option1, answer.Option2 as option2,  answer.Option3 as option3,  answer.Option4 as option4, answer.Answer as answer from test join question on test.idTest = question.idTest join answer on answer.idQuestion = question.idQuestion where test.idTest = 2;", (err, result, fields) => {
    if(err) throw err;
    console.log(result.data);
    res.send(result)
  })
})

app.get('/Login', function(req, res) {
  con.query("select user.idUser, user.name, user.phone, user.password from user;", (err, result, fields) => {
    if(err) throw err;
    res.send(result)
  })
})

app.get('/Rank', function(req, res) {
  con.query("Select score.idScore as id, user.name as name, test.idTest as test, score.score from user join score on user.idUser = score.idUser join test on test.idTest = score.idTest order by score desc limit 4;", (err, result, fields) => {
    if(err) throw err;
    res.send(result)
  })
})

app.post('/adduser', function(req, res) {
  console.log(req.body.name);
  var user_name = req.body.name,
  user_Phone = req.body.phone,
  user_PW = req.body.passwd;
  con.query(`INSERT INTO user(name, phone, password) VALUES ('${user_name}', '${user_Phone}', '${user_PW}');`,
  (err,response) => {
    if(err){
      res.send(err);
    }else {
      res.send('<div style="text-align: center; margin: 150px 0;"><h1>Đăng ký thành công</h1><a style="font-size:5rem;"href="http://localhost:8080/">Quay về trang chủ</a></div>')
    }
  })
})

app.post('/postScore', function(req, res) {
  var idUser = req.body.idUser;
  var idTest = req.body.idTest;
  var score = req.body.score;
  con.query(`INSERT INTO score(idUser, idTest, score) VALUES (${idUser}, ${idTest}, ${score});`,
  (err,response) => {
    if(err){
      res.send(err);
    }else {
      res.send(`<div style="text-align: center; margin: 150px 0;"><h1>Chúc mừng bạn đã hoàn thành bài thi</h1><h1>Điểm số của bạn là: ${score} / 10<h1/><a style="font-size:4rem;"href="http://localhost:8080/">Quay về trang chủ</a></div>`)
    }
  })
})



app.listen(3000)
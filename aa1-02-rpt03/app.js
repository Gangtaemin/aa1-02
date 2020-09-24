// app.js
var express = require("express");
var app = express();
var 포트 = 3000;

app.get("/", function (req, res) {
  res.send('<a href="/hello"> Hello Page </a>');
});

app.get("/ hello", function (req, res) {
  res.send("Hello aa02!");
});

app.get("/ comsi", function (req, res) {
  res.send("Hello Comsi!");
});

app.get("/ aa03", function (req, res) {
  res.send("안녕하세요 aa03, Comsi! 내 첫 익스프레스 서버 !!!");
});

app.get("/ naver", function (req, res) {
  res.send('<a href="http://www.naver.com"> naver로 이동 </a>');
});

// 클라이언트의 요청 수신
var server = app.listen(port, function () {
  콘솔.log("포트 % d에서 수신 중", 서버.주소().포트);
});

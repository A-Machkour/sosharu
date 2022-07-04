const express = require("express");
const app = express();
const helmet = require("helmet");

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Content-Length, X-Requested-With",
    "Access-Control-Allow-Credentials": true,
  });

  next();
});
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    // ...
  })
);
app.use(helmet());

app.use((req, res) => {
  res.json({ message: "Votre requête a bien été reçue !" });
});

module.exports = app;

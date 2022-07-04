const http = require("http");
const app = require("./app");
require("dotenv").config();
require("./db");

app.set("port", process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

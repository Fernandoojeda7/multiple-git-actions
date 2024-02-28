const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.get("/", (req, res) => {
  console.log("Request: Hello Equipzilla!");
  res.send("Hello Equipzilla, Good Morning, Arriba Arriba Arriba!");
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});

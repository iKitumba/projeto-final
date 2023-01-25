require("dotenv/config");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

require("./database");

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT, () => {
  console.log(`Server up on ${process.env.HOST}:${PORT}`);
});

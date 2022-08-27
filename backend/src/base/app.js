const express = require("express");
const cors = require("cors");
require("./config");

const app = express();
const { template } = require("../routes");

app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT);

app.use("/", template);

// app.use(notFound);
// app.use(handleErrors);

module.exports = app;

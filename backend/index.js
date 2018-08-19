const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const LinkService = require("./linkService/LinkService");
const LinkRouter = require("./linkRouter/LinkRouter");

const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

let linkService = new LinkService(knex);

app.use("/api", new LinkRouter(linkService).router());

app.listen(8080, () => console.log(`sharelink listening on port ${8080}!`));

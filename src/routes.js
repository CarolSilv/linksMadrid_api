const express = require("express");
const db = require("./db/db");

const router = express.Router();

router.get("/", (request, response) => {
db.getPgVersion()
  return response.send("aaaaaaaaaaaaa");
});

module.exports = router;

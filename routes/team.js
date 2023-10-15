const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/", (req, res) => {
  res.json(data.team);
});

router.get("/:id", (req, res) => {
  res.json(data.team[req.params.id]);
});

module.exports = router;

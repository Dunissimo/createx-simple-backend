const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/", (req, res) => {
  res.json(data.courses);
});

router.get("/:id", (req, res) => {
  res.json(data.courses[req.params.id]);
});

router.get("/content/:id", (req, res) => {
  res.json(data["courses-content"][req.params.id]);
});

module.exports = router;

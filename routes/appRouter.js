const express = require("express");
const { index, new_mes } = require("../controllers/appController");
const router = express.Router();

router.get("/", index);

router.post("/new", new_mes);

module.exports = router;

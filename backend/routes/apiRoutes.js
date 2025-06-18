const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Fortune Cookie API funcionando!",
    version: "1.0.0",
    endpoints: ["GET /api/ - Status da API"],
  });
});

module.exports = router;

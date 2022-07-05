const express = require ("express");
const { validateToken } = require("../middleware/authMiddleware");
const router = express.Router();
const {Admin} = require('../models');

router.get("/", validateToken, (req, res)=>{
    res.json(req.body)
} );

module.exports = router;
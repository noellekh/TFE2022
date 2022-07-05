const express = require ("express");
const { validateToken } = require("../middleware/authMiddleware");
const router = express.Router();
const {Charts} = require('../models');

router.get("/:user_id", async(req, res)=>{
    const user_id = req.params.user_id;
    const charts = await Charts.findAll({where:{user_id: user_id}});
    res.json (charts);
});

router.post('/', validateToken, async(req, res)=>{
    const chart = req.body;
    const user_id = req.user.user_id
    chart.user_id = user_id
    await Charts.create(chart);
    res.json(chart);
});

module.exports = router;
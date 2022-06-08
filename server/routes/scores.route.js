const express = require('express');
const router = express.Router();
const { Scores} = require('../models');

router.get("/:id_training", async (req, res)=>{
    const id_training = eq.params.id_training;
    const scores = await Scores.findAll({where:{id_training: id_training}});
    res.json(scores);
});

router.post('/', async(req, res)=>{
    const score = req.body;
    await Scores.create(score);
    res.json(score);
});

module.exports = router;
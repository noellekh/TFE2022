const express = require ("express");
const router = express.Router();
const {Scores} = require('../models');

router.get("/", async (req, res)=>{
    const listTrainings = await Trainings.findAll();
    res.json(listTrainings)
});

router.get("/byId/:id_training", async(req, res)=>{
    const id_training = req.params.id_training;
    const score = await Scores.findAll({where:{id_training: id_training}});
    res.json(score)
})

router.post("/",async (req, res)=>{
    const train = req.body;
    await Trainings.create(train);
    res.json(train);
})

module.exports = router;
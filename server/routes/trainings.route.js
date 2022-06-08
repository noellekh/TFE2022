const express = require ("express");
const router = express.Router();
const {Scores} = require('../models');
const {Trainings} = require ('../models');

router.get("/", async (req, res)=>{
    const listTrainings = await Trainings.findAll();
    res.json(listTrainings)
});

router.get("/byId/:id_training", async(req, res)=>{
    const id_training = req.params.id_training;
    const train = await Trainings.findByPk(id_training);
    res.json(train)
})

router.post("/",async (req, res)=>{
    const train = req.body;
    await Trainings.create(train);
    res.json(train);
})

module.exports = router;
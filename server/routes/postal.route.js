const express = require ("express");
const router = express.Router();
const {Postal} = require('../models');

router.post('/', async (req, res)=>{
    const {
        zip, 
        town

    }= req.body;

    await Postal.bulkCreate(
        {zip: 1348, town: "Louvain-La-Neuve"},
        {zip: 1325, town: "Chaumont-Gistoux"},
        {zip: 1000, town: "Bruxelles"}
    );

    res.json(zip)

 
});

router.get("/", async(req, res)=>{
    const allPostal = await Postal.findAll();
    res.json(allPostal);
});

module.exports = router;
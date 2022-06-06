const express = require ("express");
const router = express.Router();
const {AgendaClient} = require('../models');

router.get("/", async (req, res)=>{
    const listAgendaClient = await AgendaClient.findAll();
    res.json(listAgendaClient)
});

router.post("/",async (req, res)=>{
    const post = req.body;
    await AgendaClient.create(post);
    res.json(post);
})

module.exports = router;

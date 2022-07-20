const express = require ("express");
const router = express.Router();
const {AgendaClient} = require('../models');
const {validateToken} = require('../middleware/authMiddleware')

router.get("/", async (req, res)=>{
    const listAgendaClient = await AgendaClient.findAll();
    res.json(listAgendaClient)
});


router.get("/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    const dates = await AgendaClient.findAll();
    res.json(dates);
  });


router.post("/", validateToken,async (req, res)=>{
    const book = req.body;
    const user_id = req.user.user_id
    book.user_id = user_id;
    await AgendaClient.create(book);
    res.json(book);
});

router.delete("/:ag_id", validateToken, async(req, res)=>{
    const ag_id = req.params.ag_id;
    await AgendaClient.destroy({
        where:{
            ag_id:ag_id,
            
        },
    });
    res.json("Coaching supprimé avec succés")
});

router.put('/coaching-event', async(req, res)=>{
    const {newDate, ag_id } = req.body;
    await AgendaClient.update({ag_date: newDate}, {where:{ag_id:ag_id}})
    res.json(newDate);
});

module.exports = router;

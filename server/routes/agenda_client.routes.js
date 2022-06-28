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
    const dates = await AgendaClient.findAll({ include:[{
                                                    model: Users,
                                                    as:'usr',
                                                    where:{user_name: user_name}
                                                    }]
                                            });
    res.json(dates);
  });


router.post("/", validateToken,async (req, res)=>{
    const book = req.body;
    const user_id = req.user.user_id
    book.user_id = user_id;
    await AgendaClient.create(book);
    res.json(book);
})

module.exports = router;

const express = require ("express");
const router = express.Router();
const {AgendaClient} = require('../models');
const {Users} =require('../models')
const {validateToken} = require('../middleware/authMiddleware')
//const transporter = require('../index')
const nodemailer = require('nodemailer');
const usersModels = require("../models/users.models");


router.get("/", async (req, res)=>{
    const listAgendaClient = await AgendaClient.findAll();
    res.json(listAgendaClient)
});


router.get("/:user_id", async (req, res) => {
    const user_id = req.params.user_id;
    const dates = await AgendaClient.findAll({
        where:{user_id:user_id},
        include:{
            model: Users,
            as:"User",
            
            //where:{user_id:user_id}
        }
    })
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


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:"fullpatate.00@gmail.com",
        pass: "xgybdcayxkqaelix"
        
    }
});

transporter.verify((err, success)=>{
    err? console.log(err)
    : console.log('Pret à envoyer des mails: ${success}');
});


router.post('/mail-confirmation', async(req, res)=>{

    let text_rv = `<!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <style>
                .mail-conf:{text-aling:center}
                .mail-titre:{color: rgb(175,27,27)}
            </style>
        </head>
        <body>
            <div classname="mail-conf">
                <div classname="mail-titre"><h1>Full Patate</h1></div>
                <div classname="mail-text">
                    <h2>Confirmation de prise de rendez-vous</h2>
                    <p>Bonjour, vous avez réservé un coaching à la date suivante: ${req.body.ag_date}. Vous pouvez annuler jusqu'à 24h à l'avance via votre espace membre</p>
                </div>
            </div>
        </body>
    </html>`;


    let mailOptions = {
        from:"fullpatate.00@gmail.com",
        to: req.body.user_email,
        subject:"Confirmation rendez-vous",
        html: text_rv
    };
    
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          console.log("Error mail" + err);
        } else {
          console.log("Email sent successfully");
        }
       });
})

module.exports = router;

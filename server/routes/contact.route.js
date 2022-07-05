const express = require('express');
const { validateToken } = require('../middleware/authMiddleware');
const router = express.Router();
const { Contact} = require('../models');
const { route } = require('./users.route');

router.post("/", async (req, res)=>{
    const {
        contact_name,
        contact_surname,
        contact_phone,
        contact_mail
    } = req.body

    await Contact.create({
        contact_name: contact_name,
        contact_surname: contact_surname,
        contact_phone: contact_phone,
        contact_mail: contact_mail
    });

    res.json("Contact ajouter avec succés! ")
});

router.get("/", async (req, res)=>{
    const listContact = await Contact.findAll();
    res.json (listContact);
});

router.delete("/:id_contact", validateToken, async (req, res)=>{
    const id_contact = req.body.id_contact;
    await Contact.destroy({
        where:{
            id_contact: id_contact
        }
    });

    res.json("Contact supprimé avec succés !")
})

router.put('/contact-name', validateToken, async(req, res)=>{
    const {newName, id_contact } = req.body;
    await Contact.update({contact_name: newName}, {where:{id_contact:id_contact}})
    res.json(newName);
});

router.put('/contact-surname', validateToken, async(req, res)=>{
    const {newSurname, id_contact } = req.body;
    await Contact.update({contact_surname: newSurname}, {where:{id_contact:id_contact}})
    res.json(newSurname);
});

router.put('/contact-phone', validateToken, async(req, res)=>{
    const {newPhone, id_contact } = req.body;
    await Contact.update({contact_phone: newPhone}, {where:{id_contact:id_contact}})
    res.json(newPhone);
});

router.put('/contact_mail', validateToken, async(req, res)=>{
    const {newMail, id_contact } = req.body;
    await Contact.update({contact_mail: newMail}, {where:{id_contact:id_contact}})
    res.json("newMail");
});

module.exports = router;
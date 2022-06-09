const express = require ("express");
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require ('bcrypt');

const {sign}= require('jsonwebtoken');

router.post("/",async (req, res)=>{
    const {
        user_name, 
        user_surname, 
        user_password,
        user_birth,
        user_email,
        user_phone,
        user_sex,
        user_street,
        postal,
        newsletter,
    } = req.body;
    bcrypt.hash(user_password, 10).then((hash)=>{
        Users.create({
            user_name: user_name,
            user_surname: user_surname,
            user_password: hash,
            user_birth:user_birth,
            user_email:user_email,
            user_phone:user_phone,
            user_sex:user_sex,
            user_street:user_street,
            postal:postal,
            newsletter:newsletter
        });
        res.json ("Utilisateur ajouté avec succés !")
    });

});

router.post('/login', async(req, res)=>{
    const {user_email, user_password}= req.body;
    const user = await Users.findOne({where: {user_email:user_email}});

    if (!user) {
        res.json({error:"user doesn't exist !"})
    }else{

    bcrypt.compare(user_password, user.user_password).then((match)=>{
        if (!match){
             res.json({error: "wrong passwprd or email !"});
            

        }else{
            const accessToken = sign(
                {user_email: user.user_email, user_id: user.user_id},
                 "secret" )
            res.json (accessToken);

        }

        });
    }
});

module.exports = router;
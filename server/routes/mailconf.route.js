const nodemailer = require("nodemailer");

router.post("/confirmation-coaching", async(req, res)=>{
    let detailsCoaching = "";
    let data= await User.findOne({where: {user_name: req.user.user_name}});
})
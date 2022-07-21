const Sequelize = require('sequelize');
const config={
    host:'smtp.gmail.com',
    port:'273',
    secure:'false',
    auth:{
        user:'fullpatate.00@gmail.com',
        pass:'fuLLpatate2022'
    }
}



module.exports = function notify (model, transport, options){
    try{
        let mail = transport.sendMail({
            from: 'fullpatate.00@gmail.com',
            to: model.email,
            ...options
        });
        console.log(mail)

    }catch(e){
        console.log(e)
    }
}
const nodemailer = require('nodemailer');

module.exports = function mailer (config){
    try{
        let transport = nodemailer.createTransport(config);
        return transport;
    }catch (e){
        console.warn(e);
    }
}
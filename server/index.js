const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

const notifier = require ('./src/notify');
const transpot = require( './src/mailer');

app.use(express.json());

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Methods': "GET, POST, PUT, DELETE"
};
app.use(cors(corsOptions));

const db =  require('./models');

// Routers

const agendaClient = require ('./routes/agenda_client.routes.js');
app.use("/agendaclient", agendaClient);

const trainings = require('./routes/trainings.route.js');
app.use("/training",trainings);

const scores = require('./routes/scores.route.js');
app.use("/scores",scores);

const users = require('./routes/users.route.js');
app.use("/auth",users);

const admin = require('./routes/admin.route.js');
app.use("/admin", admin);

const blog = require('./routes/blog.route.js');
app.use("/blog", blog);

const charts = require ('./routes/charts.route.js');
app.use("/charts", charts);

const contact = require ('./routes/contact.route.js');
app.use("/contact", contact);

const postal = require ('./routes/postal.route.js');
app.use('/postal', postal);

const products = require ('./routes/product.route.js');
app.use('/products', products);

// Send Mail
/*
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
*/



db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("Server running on port 3001");
    });
});
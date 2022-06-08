const express = require('express');
const app = express();
const cors = require('cors');

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

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("Server running on port 3001");
    });
});
//root server file
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const massive = require('massive');
const session = require('express-session');
const express = require('express');
const profileController = require('./controllers/profileController');
const matchesController = require('./controllers/matchesController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();
app.use(express.json());

//Controller endpoints here

//PROFILE ENDPOINTS
//update profile: receives a profile object and sends it to the DB to update that profile object in the DB. 
app.put('/api/updateprofile/', profileController.updateProfile);

//MATCHES ENDPOINTS
//Update like table : Check for match on like table: If matched, update match=> create chat in chat table * The front end should send an ID parameter in the URL. 
app.post('/api/like/:userId', matchesController.like);


app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 525600
    }
}))


//establish the database connection and start the server
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}, {scripts: path.join(__dirname, '../db')})
.then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => {
        console.log(`Server running on port ${SERVER_PORT}`)
    });
}).catch(err=>console.log(err));
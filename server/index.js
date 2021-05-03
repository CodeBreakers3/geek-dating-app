//root server file
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const massive = require('massive');
const session = require('express-session');
const express = require('express');
const authCtrl = require('./controllers/authController')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();
app.use(express.json());

//Controller endpoints here

// Authentication Controller Endpoints
app.post("/auth/signup",  authCtrl.register)
app.post("/auth/user/", authCtrl.logIn)
app.delete("/auth/logout", authCtrl.logOut)
app.put("/auth/updateuser", authCtrl.updateUser)

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
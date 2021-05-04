//root server file
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env')});
const massive = require('massive');
const session = require('express-session');
const express = require('express');
const profileController = require('./controllers/profileController');
const matchesController = require('./controllers/matchesController');
const chatsController = require('./controllers/chatsController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();
app.use(express.json());

//Controller endpoints here

//PROFILE ENDPOINTS
    //update profile: receives a profile object and sends it to the DB to update that profile object in the DB. 
    app.put('/api/updateprofile/', profileController.updateProfile);

//MATCHES ENDPOINTS
    //LIKE: add to the like table, check for match on like table, if matched, add match in the match table. 
    //The front end should send the liking users ID as a parameter in the URL. The liked users profile ID will be in the query string variables ?profile_id=X.  

    //endpoint will return the match ID if there was a match, a boolean "false" if there was no match. Either way the like will be logged in the database.
    app.post('/api/like/:user_id', matchesController.like);

    //DISLIKE: Create a bogus update for the unliked profile on the profile table*
    //The front end should send the id for the unliked profile in the URL parameters
    app.put('/api/dislike/:profile_id', matchesController.dislike);

    //UNMATCH: *Remove match from matches table, remove like from likes table, Create a bogus update for the unmatch profile on the profile table**
    //front end should send the match ID in the url params. The unmatching user_id in the query string, and the unmatched profile_id in the query string. 
    //?user_id=X&profile_id=Y
    app.delete('/api/unmatch/:match_id', matchesController.unmatch);
    
    
    app.get(`/api/chat`, chatsController.getChats);
    app.post(`/api/chat`, chatsController.addChatReply);
    app.put('/api/chat/:chat_id', chatsController.updateChatReply);
    app.delete('/api/chat/:chat_id', chatsController.deleteChatReply);

    // app.post(`/auth/register`, authController.login);

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
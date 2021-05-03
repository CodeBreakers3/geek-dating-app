//authController
const bcrypt = require('bcryptjs')

module.exports = {
    register:async (req, res) => {
        const {email} = req.body;
        const db = req.app.get('db');

        let [user] = await db.create_user(email);
        
        if(user) {
            return res.status(400).send('Email already exists!');
        } else{
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(hash, salt);
        let [newUser] = await db.register(hash);

        res.status(200).send(newUser)
    }},
    
    logIn: (req, res, ) => {
        const { email, hash } = req.body;
        const db = req.app.get('db')

        try{
            const {currentUser} = await db.get_user.sql
        }



        
    },
    logOut: (req,res) => {
        req.session.destroy()
        res.status(200).send(req.session)
    },
    updateUser: (req,res) => {
        const db = req.app.get('db')
    }


}
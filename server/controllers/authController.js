//authController
const bcrypt = require('bcryptjs')

module.exports = {
    register:async (req, res) => {
        const {email, password} = req.body;
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
    
    login: async (req, res) => {
        const db = req.app.get("db")
        const {email, password} =req.body
       try{
           const [existingUser] = await db.get_user(email)
            if(!existingUser){
            
                res.status(403).send('There is not account matched with that email, maybe you need to register?')
            } else{
            const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)

            if(!isAuthenticated){
              res.status(403).send('Email or password does not match ')
            } else{
            
            existingUser.isLoggedIn = true
            delete existingUser.hash

            req.session.user = existingUser
            res.status(200).send(req.session.user)
            }}
            
       } catch(err) {
           console.log(err)
        res.sendStatus(500)
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
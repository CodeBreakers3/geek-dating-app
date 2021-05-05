//chatsController
const express = require('express')
const http = require("http")
const app = express();
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)

io.on('connection', socket => {
    socket.emit('your id', socket.id);
    socket.on('send Message',body => {
        io.emit('message',body)
    })
})


server.listen(3111, ()=> console.log('socket server running 3111'))


module.exports = {
    getChats: (req,res) =>{
        const db = req.app.get('db')
        db.get_chats()
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err))
    },
    addChatReply: (req, res) => {
        const db = req.app.get('db');
        const { match_id,chat_content,user_id,time_stamp} = req.body;

             db.create_chat(match_id,chat_content,user_id, time_stamp)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => console.log(err))
    },
    updateChatReply: (req,res) => {
        const db = req.app.get('db');
        const {chat_id} =req.params
        const {chat_content}= req.body;

        db.edit_chat_reply(chat_id,chat_content)
        .then(dbRes => {
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },
    deleteChatReply: (req,res) =>{
        const db = req.app.get('db');
        const {chat_id} =req.params

    db.delete_chat_reply(chat_id)
    .then(dbRes=> {
    res.status(200).send(dbRes)
    })
    .catch(err => console.log(err))
    },
    getMatchedChat:(req,res) => {
        const db = req.app.get('db');
        const {chat_id}=req.params
        db.get_single_chat(chat_id)
        .then(dbRes => {
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err))
    }
}
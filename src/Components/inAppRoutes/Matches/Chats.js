import MappedChats from "./MappedChats";
import "./chats.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BackButton from '../BackButton'

const Chats = (props) => {
  const [messages, setMessages] = useState([]);
  const [game, setGame] = useState("");
  const [chat_content, setchat_content] = useState("");
  const { match_id } = props.match.params;
  const {profile_id}=props.userReducer.user

  useEffect(() => {
    console.log(props);
    axios.get(`/api/matchedchat/${match_id}`).then((res) => {
      setMessages(res.data);
    });
    getGame();
  }, [messages]);

  const getGame = () => {
    let gotGame = false;
    for (let i = 0; i < messages.length; i++) {
      if (gotGame === false) {
        if (messages[i].profile_id !== profile_id) {
          setGame(messages[i].game);
          return (gotGame = true);
        }
      }
    }
  };
  const handleClick = () => {
    console.log(match_id)
    axios
      .post(`/api/chat/${match_id}`,{chat_content,profile_id})
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
    setchat_content("");
  };

  let mappedChats = messages.map((message) => {
    return (
      <MappedChats key={message.chat_id} setGame={setGame} message={message} />
    );
  });

  return (
    <div id="chatsHolderHolder">
      <div className="chatsHolder">
        <div className="mappedChats">{mappedChats}</div>
        <section id="chat_contentSection">
          <input
            value={chat_content}
            onChange={(e) => setchat_content(e.target.value)}
            className="chat_content"
            type="textarea"
            placeHolder={`Ask about their favorite game... (hint: it's ${game})`}
          ></input>
          <div onClick={() => handleClick()} className="messageButton">
            Send
          </div>
        </section>
      </div>  
      <BackButton/>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps)(Chats);

// const Chat = ()=> {
//     const [yourID, setYourID] = useState();
//         const [messages,setMessages] = useState([]);
//         const [message, setMessage] = useState('');

//     const socketRef = useRef()

// useEffect(()=>{
//     socketRef.current = io.connect('http://localhost:3111');

//     socketRef.current.on('your id', id =>{
//         setYourID(id)
//     })

// socketRef.current.on('message', (message)=>{
// recievedMessage(message)
// })

// })
// function recievedMessage(message){
//     setMessages(oldMessages => [...oldMessages,message])
// }
// function sendMessage(e){
//     e.preventDefault()
//     const messageObject ={
//         body: message,
//         id:yourID,
//     }
//     setMessage('')
// socketRef.current.emit('send message', messageObject)
// }

// function handleChange(e){
// setMessage(e.target.value)
// }

//     return(
//     <div>
//         <section>
// {messages.map((message,i)=> {
//     if(message.id === yourID){
//         return(
//             <div key={i}>
//                 <div>
//                 {message.body}
//                 </div>
//             </div>
//         )
//     }
//     return(
//         <div key={i}>
// <div>
//     {message.body}
// </div>
//         </div>
//     )
// })}
//         </section>
//         <form onSubmit={sendMessage} >
// <textarea value={message} onChange={handleChange} placeholder='LEEROY JENKINS!'>

// </textarea>
// <button>send</button>
//         </form>
//     </div>
//     )
// }
// export default Chat

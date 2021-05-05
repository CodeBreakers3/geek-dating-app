// import React, {useState, useEffect, useRef} from 'react'
// import io from 'socket.io-client';

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
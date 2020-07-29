import React,{useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import '../ChatPage.css';

function ChatPage() {
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([
        {
            name  : "Jeff",
            image : "https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1595348125&w=1400&h=950",
            message : "hello",
        },
        {
            name  : "Jeff",
            image : "https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1595348125&w=1400&h=950",
            message : "how its going",
        },
        {
            message : "yeah",
        },
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages,{message: input}]);
        setInput("");
    }

    return (
        <div className = "chatPage">
            
            <p className = "chatPage__timestamp">you match with jeff on 10/20/2020 </p>

            {messages.map((message) => (
                message.name ? (
                    <div className="chatPage__message">
                        <Avatar 
                            className = "chatPage__image"
                            alt = {message.name}
                            src = {message.image}
                        />
                        <p className = "chatPage__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatPage__message">
                        <p className = "chatPage__textUser">{message.message}</p>
                    </div>
                )
        ))}

        
           <form className = "chatPage__input">
               <input value={input} onChange={e => setInput(e.target.value)} className="chatPage__inputField" type = "text" placeholder = "Type a message..."/>
               <button type = "submit" onClick = {handleSend} className="chatPage__inputbutton">SEND</button>
           </form>
                  


        </div>
    );
}

export default ChatPage

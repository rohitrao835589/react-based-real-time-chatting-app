import React, { useState } from 'react'
import Display from '../components/Display';
import Messagebox from '../components/Messagebox';
import Navbar from '../components/Navbar';
function ChatScreen({ userName, room }) {
  const [message, setMessage] = useState('');

  //to keep track mine message or not
  const [myMessage, setMyMessage] = useState(false);
  const [sender, setSender] = useState('');
  return (
    <div>
      <Navbar room={room}/>
      <Display message={message} myMessage={myMessage} senderName={sender} />
      <Messagebox
        onSendMessage={(newMessage) => setMessage(newMessage)}
        isMyMessage={(check) => setMyMessage(check)}
        userName={userName}
        upDateSender={(name) => setSender(name)}
        room={room}
      />
    </div>
  )
}

export default ChatScreen
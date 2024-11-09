import React, { useState } from 'react'
import ChatScreen from './Screen/ChatScreen';
import SignIn from './Screen/SignIn';
function App() {
  const [havedUser, setHavedUser] = useState(false);
  const [chatSceen, setChatSceen] = useState(false);

  const [formData, setFormData] = useState({ username: '', roomId: '' });

  const handleFormSubmit = (username, roomId) => {
    setFormData({ username, roomId });
    setHavedUser(true);
    setChatSceen(true);
  };
  return (
    <div>
      {!havedUser && <SignIn  onSubmit={handleFormSubmit}/> }
      {chatSceen && <ChatScreen userName={formData.username} room={formData.roomId} />}
    </div>
  )
}

export default App;
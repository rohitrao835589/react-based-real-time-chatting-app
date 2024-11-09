import React, { useState, useEffect, useRef } from 'react';
import { Paper, CssBaseline, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Background = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `#d1f7b7 url("https://www.transparenttextures.com/patterns/escheresque-dark.png")`,
  backgroundAttachment: 'fixed',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const DemoPaper = styled(Paper)(({ theme, isMyMessage }) => ({
  width: 'fit-content',
  maxWidth: '40%',
  padding: theme.spacing(2),
  backgroundColor: isMyMessage ? '#dcf8c6' : '#f0f0f0',
  color: '#000000',
  borderRadius: '8px',
  alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
  textAlign: 'left',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '70%',
  },
}));

function Display({ message, myMessage, senderName }) {
  const [messages, setMessages] = useState([]);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    if (message.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        { message, myMessage, senderName }
      ]);
    }
  }, [message, myMessage, senderName]);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView(false);
    }
  }, [messages]);

  function createMessageBox({ message, myMessage , senderName }, index) {
    return (
      <DemoPaper isMyMessage={myMessage} key={index}>
        {!myMessage && <strong>{senderName} : </strong>} {message}
      </DemoPaper>
    );
  }

  return (
    <>
      <CssBaseline />
      <Background>
        <div className="topMargin" />
        {messages.map((msg, index) => createMessageBox(msg, index))}
        {/* Ref to the last message */}
        <div ref={endOfMessagesRef}  className='lowerChild'/>
      </Background>
    </>
  );
}

export default Display;

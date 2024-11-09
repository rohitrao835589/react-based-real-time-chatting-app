import React, { useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';

// Initialize socket connection
const socket = io('https://react-based-real-time-chatting-web-app-1.onrender.com');

function Messagebox({ onSendMessage, isMyMessage, userName, upDateSender, room }) {
    const [message, setMessage] = useState("");

    // Handle incoming messages
    const handleMessage = useCallback((messageData) => {
        const msg = messageData.message;
        const sender = messageData.username;
        upDateSender(sender);
        onSendMessage(msg);
        isMyMessage(false);
    }, [upDateSender, onSendMessage, isMyMessage]);

    useEffect(() => {
        // Join the specified room
        if (room) {
            socket.emit('joinRoom', room);
        }

        // Set up event listener for new messages
        socket.on('newMessage', handleMessage);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            socket.off('newMessage', handleMessage);
        };
    }, [handleMessage, room]);

    // Handle form submission
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSendMessage(message);
        isMyMessage(true);

        // Emit message data to the server
        const messageData = {
            username: userName,
            message: message,
            room: room
        };
        socket.emit("message", messageData);

        // Clear the input field after sending
        setMessage('');
    };

    // Update message state on input change
    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div className='fixed-bottom'>
            <form onSubmit={handleFormSubmit} className='input-group input-group-lg'>
                <input
                    className='form-control bg-light'
                    type="text"
                    value={message}
                    autoComplete='off'
                    onChange={handleInputChange}
                    aria-label="Message input"
                    placeholder='message...'
                />
                <button className='btn btn-info ' type='submit'><i class="fa-solid fa-paper-plane fa-xl"></i></button>
            </form>
        </div>
    );
}

export default Messagebox;

import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { configDotenv } from "dotenv";

// Express setup
configDotenv();
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true  
    }
});
const port = process.env.PORT;

// Define routes and sockets
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

io.on("connection", (socket) => {

    // Handle room joining
    socket.on('joinRoom', (room) => {
        socket.join(room);
    });

    socket.on("message", (messageData) => {
        const { room, message, username } = messageData;
        socket.to(room).emit('newMessage', messageData);
    });
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

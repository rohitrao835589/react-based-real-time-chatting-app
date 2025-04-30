# React-Based Real-Time Chatting App

A real-time chat application built using **React**, **Socket.IO**, and **Node.js** that allows users to create and join chat rooms, send messages, and chat with multiple people in real-time.

## Features

- **Real-time Messaging**: Send and receive messages instantly in a chat room.
- **Create Rooms**: Users can create custom rooms for specific topics or groups.
- **Join Rooms**: Join existing rooms with a unique room ID.
- **Multiple Participants**: Multiple users can chat within a room at the same time.
- **User-friendly UI**: Simple and clean interface built using React.

## Technologies Used

- **Frontend**: React, Socket.IO-client
- **Backend**: Node.js, Express, Socket.IO
- **Styling**: CSS (Styled Components or custom CSS for design)

## Installation

### Clone the Repository

```bash
git clone https://github.com/rohitrao835589/react-based-real-time-chatting-app.git
cd react-based-real-time-chatting-app
```

### Install Dependencies

Install both frontend and backend dependencies:

1. **Frontend**:
   Navigate to the `client` directory and run:

   ```bash
   cd client
   npm install
   ```

2. **Backend**:
   Navigate to the `server` directory and run:

   ```bash
   cd server
   npm install
   ```

### Running the App

1. **Start the Backend**:
   Inside the `server` directory, run:

   ```bash
   npm start
   ```

2. **Start the Frontend**:
   Inside the `client` directory, run:

   ```bash
   npm start
   ```

The app will be running on [http://localhost:3000](http://localhost:3000).

## Live Demo

You can try out the live demo of the app here:  
[Live Demo - Chat App](https://chatkar.netlify.app/)

## How It Works

- The app is divided into two parts: a **client** (React) and a **server** (Node.js/Express).
- The **server** listens for real-time communication using Socket.IO, handling connections, disconnections, and messages.
- The **client** connects to the server using Socket.IO-client, sends messages, and updates the UI in real-time.

### Key Components

- **Room Creation**: Users can create new chat rooms with a unique ID.
- **Room Joining**: Users can enter any existing chat room using the room's ID.
- **Messaging**: Users can send text messages to the room, which are broadcasted to all members of the room.

## Screenshots

![Chat Room](./assets/chat-room.png)

*(Add relevant screenshots of the app in use here)*

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.


## Acknowledgments

- Socket.IO: For enabling real-time communication.
- React: For building the UI.
- Node.js & Express: For server-side communication and handling requests.

---

Made with ❤️ by [Rohit Rao](https://github.com/rohitrao835589)

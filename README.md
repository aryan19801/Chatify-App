🚀 Chatify - A Real-Time MERN Chat App 💬


<img width="1901" height="853" alt="Screenshot 2025-08-03 193350" src="https://github.com/user-attachments/assets/18e30855-1e57-4661-993d-fe764a1b42c1" />

✨ About

Chatify is a dynamic, real-time chat web application built with the powerful MERN (MongoDB, Express, React, Node.js) stack. ⚡ It provides seamless, instant messaging capabilities by leveraging Socket.IO. 🤝 The app is designed to facilitate effortless communication with features for one-on-one private chats and group conversations, all within a modern and user-friendly interface.

🌟 Key Features
💬 Real-Time Messaging: Instant message sending and receiving powered by Socket.IO.

🔐 Secure User Authentication: Users can securely sign up, log in, and manage their profiles.

👥 Private & Group Chats: Support for both direct one-on-one conversations and collaborative group chats.

🟢 Online Status: Displays the online/offline status of contacts in real-time.

🔍 Search & Contacts: Easily search for users and manage your contact list.

📸 Emoji & Image Sharing: Enhance your conversations with support for emojis and image sharing.

🛠️ Tech Stack
Frontend:

⚛️ React

🎨 Tailwind CSS 

🌐 Socket.IO Client

Backend:

⚙️ Node.js

📦 Express

💾 MongoDB

🍃 Mongoose

🔌 Socket.IO Server

🔑 JWT (JSON Web Tokens) for authentication

🏁 Getting Started
✅ Prerequisites

Before diving in, ensure you have the following installed on your system:

  *  Node.js (comes with npm) - [Download here](https://nodejs.org/)
  *  MongoDB - Have a local instance running or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

⚙️ Installation
Clone the repository:

git clone https://github.com/aryan19801/Chatify-App.git

cd Chatify-App

Configure Environment Variables:

Navigate to the server directory and create a .env file.

Populate it with your database connection string and a secret key for JWT:

MONGO_URI=your_mongodb_connection_string_here

PORT=5000

JWT_SECRET=a_very_long_and_secure_secret_key

Install Dependencies:

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

Launch the Application:

# Start the backend server
npm run dev --prefix ../server

# Start the React app
npm start

Your Chatify app should now be live at http://localhost:5001 🎉

🚀 Deployment
Chatify is proudly hosted live on Render! ☁️ To deploy your own instance, follow these straightforward steps:

📤 Push your code to your own GitHub repository.

➕ Create a new Web Service on Render and connect your repository.

⚙️ In your Render dashboard, head over to the Environment tab and add the necessary environment variables:

MONGO_URI

JWT_SECRET

🏗️ Configure the Build Command to first install dependencies for both the server and client, and then build the React frontend:

npm install --prefix server && npm install --prefix client && npm run build --prefix client

🚀 Set the Start Command to initiate your backend server.

🔗 Explore the live instance of Chatify here: https://chatify-app-1-u06w.onrender.com/


🧑‍💻 Contact
Name: Aryan

GitHub: https://github.com/aryan19801

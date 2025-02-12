require("dotenv").config();  // Loads the .env file
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Read the Bot Token and Chat ID from .env file
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// Serve static files (HTML, CSS, JS) from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Homepage Route (Serves index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Main Page Route (Serves main.html)
app.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main.html"));
});

// API to send love letter via Telegram
app.post("/send-message", async (req, res) => {
    try {
        const message = req.body.message;
        const telegramURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        await axios.post(telegramURL, {
            chat_id: CHAT_ID,
            text: message
        });

        res.json({ success: true, message: "Love letter sent successfully! 💖" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send message" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

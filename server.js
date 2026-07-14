const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/message", messageRoutes);
app.get("/", (req, res) => {
    res.send("Chat App Backend Running...");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}/users`);
    console.log(`http://localhost:${PORT}/message`);
});

const Message = require("../models/message");

const sendMessage = async (req, res) => {
  try {
    const { sender, receiver, message } = req.body;

    const newMessage = await Message.create({
      sender,
      receiver,
      message,
    });

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const { sender, receiver } = req.query;

    const messages = await Message.find({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    }).sort({ time: 1 });

    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendMessage,
  getMessages,
  deleteMessage,
};
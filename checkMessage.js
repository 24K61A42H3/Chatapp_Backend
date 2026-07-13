const mongoose = require("mongoose");
const Message = require("./models/message");
require("dotenv").config();

async function check() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const messages = await Message.find();

    console.log("Number of messages:", messages.length);
    console.log(messages);

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

check();
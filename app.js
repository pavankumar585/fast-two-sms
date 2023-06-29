require("dotenv").config();
const fast2sms = require("fast-two-sms");

const optons = {
  authorization: process.env.SECRET_KEY,
  message: "Hai Pavan!",
  numbers: ["9515064200"],
};

async function sendMsg() {
  try {
    const response = await fast2sms.sendMessage(optons);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

sendMsg();

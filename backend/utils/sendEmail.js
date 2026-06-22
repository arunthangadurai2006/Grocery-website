const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "qazgpphqguapvzek",
  },
});

async function sendEmail() {
  try {
    await transporter.sendMail({
      from: "yourgmail@gmail.com",
      to: "yourgmail@gmail.com", // send to yourself for testing
      subject: "Test Email",
      text: "This is a test email from my Grocery App.",
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.log(error);
  }
}

sendEmail();
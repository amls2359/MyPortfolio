const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const nodemailer = require('nodemailer');

require('dotenv').config();


const router = express.Router();

router.post('/signup',async(req,res)=>{
    const {name,email,password,phoneNumber}= req.body
    try
    {
        const existingUser = await User.findOne({email})
        if(existingUser)
        {
            return res.status(400).json({message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({name,email,password:hashedPassword,phoneNumber})
        await newUser.save()

        res.json({message:'signup successfull'})
    }
    catch(error)
    {
       res.status(500).json({message:'Internal server error'})
    }

})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User not found' });


   const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
    res.json({ message: 'Login successful', token });

});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS, // your Gmail
    pass: process.env.EMAIL_PASSWORD    // 16-char app password
  },
});

router.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

const mailOptions = {
  from: `"${name} via Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`,
  to: process.env.EMAIL_ADDRESS, // You receive it
  replyTo: email, // User’s email (so you can reply directly)
  subject: `📩 New Contact Form Submission: ${subject}`,
  text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Subject: ${subject}
    Message: ${message}
  `,
};

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({ success: false, error: error.message });
  }
});


module.exports = router
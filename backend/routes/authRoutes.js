const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const axios = require('axios');

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

router.post("/send-sms", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Example for Fast2SMS
    const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "authorization": process.env.FAST2SMS_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        route: "q",
        sender_id: "TXTIND",
        message: `New Contact Form Submission\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
        language: "english",
        flash: 0,
        numbers: process.env.RECEIVER_PHONE_NUMBER // your number in .env
      })
    });

    const data = await response.json();
    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to send SMS" });
  }
});


module.exports = router
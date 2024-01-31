// const express = require('express');
// const bodyParser = require('body-parser');
// const randomize = require('randomatic');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// // Sample in-memory user data
// let users = [];
// // In-memory cache to store generated OTPs (for demo purposes)
// const otpCache = {};

// // Middleware to simulate token verification
// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token === 'your-secret-token') {
//     next();
//   } else {
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// };

// // Function to generate a random 6-digit OTP
// const generateOtp = () => {
//   return randomize('0', 6);
// };

// app.post('/signup', (req, res) => {
//   const { mobile } = req.body;
  
//   // Generate OTP
//   const otp = generateOtp();

//   // Store the OTP in cache
//   otpCache[mobile] = otp;

//   // Implement user signup logic here
//   // For simplicity, just store the user data in memory
//   users.push({ mobile, otp });
//   res.json({ message: 'Signup successful', generatedOtp: otp });
// });

// app.post('/login', (req, res) => {
//   const { mobile, enteredOtp } = req.body;
//   // Implement user login logic here
//   // For simplicity, just check if the user exists in memory
//   const user = users.find((u) => u.mobile === mobile && u.otp === enteredOtp);
//   if (user) {
//     res.json({ message: 'Login successful', token: 'your-secret-token' });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// app.post('/verify-otp', (req, res) => {
//   const { mobile, enteredOtp } = req.body;
  
//   // Retrieve generated OTP from cache
//   const generatedOtp = otpCache[mobile];

//   // Verify entered OTP
//   if (enteredOtp === generatedOtp) {
//     // Clear the OTP from cache after successful verification
//     delete otpCache[mobile];
//     res.json({ message: 'OTP verification successful' });
//   } else {
//     res.status(401).json({ error: 'Invalid OTP' });
//   }
// });

// app.get('/home', verifyToken, (req, res) => {
//   // Simulate user data for the home page
//   const userData = {
//     name: 'John',
//     balanceINR: 12322.9,
//     balanceGold: '190g',
//   };
//   res.json(userData);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/generate-otp", (req, res) => {
  const { mobile } = req.body;

  // Generate a random OTP (you can implement your own OTP generation logic)
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Here, you might want to send the OTP to the user's mobile number using SMS or any other method

  res.json({ otp });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

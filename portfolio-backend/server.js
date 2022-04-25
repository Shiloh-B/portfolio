const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const creds = require('./secrets/creds.json');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: ({
    user: creds.username,
    pass: creds.password
  })
});


// email submition
app.post('/send_email', (req, res) => {
  transporter.sendMail({
    from: creds.username,
    to: creds.receipent,
    subject: `Portfolio Contact - ${req.body.email}`,
    text: req.body.body
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
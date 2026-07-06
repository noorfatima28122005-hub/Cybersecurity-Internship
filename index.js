const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors'); // 1. Ye add karein

const app = express();

app.use(helmet());
app.use(cors()); // 2. Ye add karein

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Cybersecurity Internship Project is Running!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
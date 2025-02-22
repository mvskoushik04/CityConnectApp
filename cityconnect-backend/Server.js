// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cityconnect', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

const professionalSchema = new mongoose.Schema({
    name: String,
    dob: String,
    age: Number,
    gender: String,
    job_title: String,
    number: String,
    timework: String,
    nuid: String,
    aadhaar: String,
    desc: String,
});

// Create a model
const Professional = mongoose.model('Professional', professionalSchema);

// API to fetch all professionals
app.get('/api/professionals', async (req, res) => {
    try {
        const professionals = await Professional.find();
        res.json(professionals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/professionals/search', async (req, res) => {
    const { job_title } = req.query;
    try {
        const professionals = await Professional.find({ job_title: new RegExp(job_title, 'i') });
        res.json(professionals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
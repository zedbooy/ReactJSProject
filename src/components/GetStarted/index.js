const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Client', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define a Mongoose schema
const clientSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
});

// Define a Mongoose model
const Client = mongoose.model('Client', clientSchema);

// API Endpoints
app.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/clients', async (req, res) => {
    const { name, email, number } = req.body;
    try {
        const newClient = new Client({ name, email, number });
        await newClient.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

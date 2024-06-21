import express from 'express';
import mongoose from 'mongoose';
import Contact from "./models/contact.js"; 





const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = "mongodb+srv://12112051:Htvfh9JU5ar7fY8l@cluster0.srwcc9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;"
console.log(uri)
mongoose.connect(uri, {})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

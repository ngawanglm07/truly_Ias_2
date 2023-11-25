
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './database/db.js';  // Assuming db.js is in the same directory as server.js
import FormModel from './models/FormModel.js'; // Assuming models directory is in the same directory as server.js
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.post('/api/submit-form', async (req, res) => {
  const formData = req.body.data;

  try {
    const savedForm = await FormModel.create({ data: formData });
    console.log('Form data saved to the database:', savedForm);
    res.json({ message: 'Form data received and saved successfully' });
  } catch (error) {
    console.error('Error saving form data to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', async (req, res) => {
  try {
    const forms = await FormModel.find();
    res.json(forms);
  } catch (error) {
    console.error('Error fetching form data from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});




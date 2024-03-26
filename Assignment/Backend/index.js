const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db'); // Change this line

const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.post('/favuniversity', (req, res) => {
  const { name, country, web_pages } = req.body;
console.log(country)
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const sql = 'INSERT INTO universities (name, country, web_pages) VALUES (?, ?, ?)';
  connection.query(sql, [name, country, web_pages], (err, result) => {
    if (err) {
      console.error('Error inserting university:', err);
      return res.status(500).json({ error: 'Failed to insert university' });
    }
    console.log('University inserted:', result);
    res.status(200).json({ message: 'University inserted successfully' });
  });
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    // Start the database connection
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        return;
      }
      console.log('Connected to database');
    console.log(`Server running on port ${PORT}`);
  });
});

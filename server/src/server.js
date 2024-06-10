const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors library
const contactFormRoutes = require('../routes/contactFormRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for all requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', contactFormRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

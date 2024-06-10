const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const engageFormRoutes = require('./api/routes/engageFormRoutes');
const contactFormRoutes = require('./api/routes/contactFormRoutes');
require('dotenv').config();

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../vyaelea/build')));

// Middleware
app.use(bodyParser.json());

// API routes
app.use('/api', engageFormRoutes);
app.use('/api', contactFormRoutes);

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../vyaelea/build', 'index.html'));
});

const port = process.env.PORT || 5000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Sync database and start server
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

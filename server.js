const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


// MongoDB connection
mongoose.connect('mongodb+srv://sazaiki:sinikiem@marketplace.gkt0reh.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    console.log('Default route handler executed');
    res.json({ message: 'Welcome to the Marketplace Application' });
  });  

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

const port = process.env.PORT || 5051;
app.listen(5051, () => {
  console.log(`Server is running on port 5051`);
});
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const feedRoutes = require('./routes/feedRoutes');

const app = express();

// اتصال MongoDB


mongoose.connect('mongodb+srv://callanege:Mosaaed248426K@cluster0.wwkvzzc.mongodb.net/facebook_mvc')
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log('MongoDB error:', err))
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB error:', err));

// إعدادات Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Routes
app.use('/feeds', feedRoutes);

// Redirect root
app.get('/', (req, res) => {
    res.redirect('/feeds');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

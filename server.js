const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

const home = require('./routes/home');


// MIDDLEWARE

app.set('views', path.join(__dirname, 'views'));
app.set('partials', path.join(__dirname, 'views/partials'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, '/public')));


//ROUTES
app.use('/', home);

app.listen(3000, () => console.log('Server running on port 3000 !' + `${path.join(__dirname, 'public')}`));  
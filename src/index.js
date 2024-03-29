const express = require('express');
const path = require('path');
const morgan = require('morgan'); 
const handlebars = require('express-handlebars');
const app = express();
const post = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/tin', (req, res) => {
    res.render('new');
});

app.listen(post, () => console.log(`http://localhost:${post}`));
require('dotenv').config()
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(path.join(__dirname , 'public')));

const template_path = path.join(__dirname, '/templates/views');
app.set('view engine', 'ejs');
app.set('views', template_path);



app.get('/', (req,res) => {
    res.send('server created')
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running in http://localhost:${port}`);
})
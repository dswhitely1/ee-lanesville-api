require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('./routes/api/admin');
const app = express();
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = process.env.DATABASE;
mongoose.connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => console.log(`Database connected`)).catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/admin', admin);

const PORT = process.env.PORT || 5000;

app.get('/test', (req, res) => res.json({status: 'working'}));

app.listen(PORT, () => console.log(`\nServer listening on port: ${PORT}\n`));
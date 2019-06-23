require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/test', (req,res)=> res.json({status:'working'}));

app.listen(PORT, ()=> console.log(`\nServer listening on port: ${PORT}\n`));
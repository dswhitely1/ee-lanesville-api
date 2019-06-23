const express = require('express');
const router = express.Router();

const Employee = require('../../models/Employee');

router.get('/', (req,res)=>res.json({message: 'Admin route working'}));

module.exports = router;
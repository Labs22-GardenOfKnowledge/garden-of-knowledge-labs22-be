const express = require('express');

const {
    getAllFamilies
} = require('../models/student.model')

router.get('/user', getAllFamilies);
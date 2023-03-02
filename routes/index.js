const express = require('express')
const {createUser, getUser, updateUser} = require('../controller')

const routed = express.Router();

routed.post('/creatU', createUser
        );

routed.get('/123', getUser);

routed.put('/update', updateUser);

module.exports = routed
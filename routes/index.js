const express = require('express')
const {createUser, getUser, updateUser, init,createCategory,getAllCategory,getCatOnID,updateCat,deleteCat,getCatOnName} = require('../controller')

const routed = express.Router();

routed.post('/creatU', createUser );
routed.get('/123', getUser);
routed.put('/update', updateUser);

routed.get('/', init)
routed.post('/ecom/api/v1/categories',createCategory);
routed.get('/ecom/api/v1/categories',getAllCategory);getCatOnID
routed.get('/ecom/api/v1/categories/:id',getCatOnID);
routed.put('/ecom/api/v1/categories/:id', updateCat);
routed.delete('/ecom/api/v1/categories/:id', deleteCat);
routed.get('/ecom/api/v1/categories?name=name',getCatOnName)

module.exports = routed
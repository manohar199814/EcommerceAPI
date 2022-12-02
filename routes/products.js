const express = require('express');
const router = express.Router();
const productsController = require('../contollers/products_api_controller');

//route to fetch all products
router.get('/',productsController.index);
//route to create product
router.post('/create',productsController.create);
//route to delete
router.delete('/:id',productsController.delete);
//route to update quantity
router.post('/:id/update_quantity',productsController.update);

module.exports = router;
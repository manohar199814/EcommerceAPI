const express = require('express');
const router = express.Router();
const productsController = require('../contollers/products_api_controller');

router.get('/',productsController.index);
router.post('/create',productsController.create);
router.delete('/:id',productsController.delete);
router.post('/:id/update_quantity',productsController.update);

module.exports = router;
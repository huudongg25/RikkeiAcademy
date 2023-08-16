const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

router.post('/', orderController.postOrder);
router.get('/', orderController.getOrder);
router.get('/:id', orderController.getOrderById);

module.exports = router;

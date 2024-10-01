const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/', transactionController.createTransaction);
router.get('/:id', transactionController.getTransaction);

// Additional routes for transaction history...

module.exports = router;

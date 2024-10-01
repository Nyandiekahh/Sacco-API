const Transaction = require('../models/transactionModel');

exports.createTransaction = async (req, res) => {
    try {
        const transactionId = await Transaction.create(req.body);
        res.status(201).json({ id: transactionId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create transaction.' });
    }
};

exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.get(req.params.id);
        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found.' });
        }
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve transaction.' });
    }
};

// Additional controller methods for retrieving transaction history...

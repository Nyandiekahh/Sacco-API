const admin = require('firebase-admin');
const db = admin.firestore();

const Transaction = {
    create: async (data) => {
        const transactionRef = db.collection('transactions').doc();
        await transactionRef.set(data);
        return transactionRef.id;
    },
    get: async (id) => {
        const transactionRef = db.collection('transactions').doc(id);
        const doc = await transactionRef.get();
        return doc.exists ? { id: doc.id, ...doc.data() } : null;
    },
    // Additional methods can be added here...
};

module.exports = Transaction;

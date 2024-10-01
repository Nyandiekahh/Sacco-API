const admin = require('firebase-admin');
const db = admin.firestore();

const Loan = {
    create: async (data) => {
        const loanRef = db.collection('loans').doc();
        await loanRef.set(data);
        return loanRef.id;
    },
    get: async (id) => {
        const loanRef = db.collection('loans').doc(id);
        const doc = await loanRef.get();
        return doc.exists ? { id: doc.id, ...doc.data() } : null;
    },
    update: async (id, data) => {
        const loanRef = db.collection('loans').doc(id);
        await loanRef.update(data);
    },
    // Additional methods can be added here...
};

module.exports = Loan;

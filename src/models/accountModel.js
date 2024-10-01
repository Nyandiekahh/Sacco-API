const admin = require('firebase-admin');
const db = admin.firestore();

const Account = {
    create: async (data) => {
        const accountRef = db.collection('accounts').doc();
        await accountRef.set(data);
        return accountRef.id;
    },
    get: async (id) => {
        const accountRef = db.collection('accounts').doc(id);
        const doc = await accountRef.get();
        return doc.exists ? { id: doc.id, ...doc.data() } : null;
    },
    update: async (id, data) => {
        const accountRef = db.collection('accounts').doc(id);
        await accountRef.update(data);
    },
    // Additional methods can be added here...
};

module.exports = Account;

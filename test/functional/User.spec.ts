const mongoose = require('mongoose');

describe('Imports', () => {

    beforeAll(async () => {
        if (!process.env.MONGO_URL) {
            throw new Error('MongoDB server not initialized!');
        }

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should run', async () => {
       
    });

});
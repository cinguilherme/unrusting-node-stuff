const mongoose = require('mongoose');
//const userModel = require('../../src/modules/user/domain/UserSchema');

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

    it('should insert a doc into collection', async () => {
        
        const users = mongoose.connection.collection('user');
    
        const mockUser = {_id: 'some-user-id', name: 'John'};
        await users.insertOne(mockUser);
    
        const insertedUser = await users.findOne({_id: 'some-user-id'});
        expect(insertedUser).toEqual(mockUser);
      });

});
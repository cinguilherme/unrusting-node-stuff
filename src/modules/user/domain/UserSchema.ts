import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    email: String
});

const model = mongoose.model('user', schema);

export default model;
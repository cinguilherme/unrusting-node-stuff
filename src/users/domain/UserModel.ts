import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
   {
    name: {
        type: String,
        required: true
    },
    other: {
        type: String,
        required: true
    }
   },
   {
       timestamps: true
   } 
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
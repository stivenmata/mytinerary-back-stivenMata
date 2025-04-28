import { Schema, model } from "mongoose";

let collection = 'users';

let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String, required: true },
    
    online: { type: Boolean, default: false }, 
}, {
    timestamps: true
});

let User = model(collection, schema);

export default User;

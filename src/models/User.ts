import { Schema, model } from 'mongoose';

interface IUser {
    username: string;
    email: string;
    password: string;
    role: string;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }, // Default role is 'user'
});

const User = model<IUser>('User', userSchema);

export default User;

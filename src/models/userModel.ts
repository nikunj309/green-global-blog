import mongoose, {Schema, Document} from "mongoose";

export interface User extends Document {
    email: string;
    password: string;
}

const UserSchema: Schema<User> = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
      },
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;
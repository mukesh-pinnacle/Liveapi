import { model, Schema, Document } from 'mongoose';
import { SuperAdmin } from '@interfaces/super_admins.interface';

const superAdminSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    encrypted_password: {
        type: String,
        required: true,
    },
    remember_created_at: {
        type: Date,
        required: false,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    display_picture: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    dispaly_name: {
        type: String,
        required: true,
    },
});

const superAdminModel = model<SuperAdmin & Document>('SuperAdmin', superAdminSchema);

export default superAdminModel;
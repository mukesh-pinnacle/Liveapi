import { model, Schema, Document } from 'mongoose';
import { AccountUser } from '@interfaces/account_users.interface';

const accountUserSchema: Schema = new Schema({
    account_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'Accounts',
        required: true, 
    },
    user_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true, 
    },
    role: { 
        type: Schema.Types.ObjectId, 
        ref: 'Role',
        required: true, 
    },
    inviter_id: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true, 
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
    last_seen_at: {
        type: Date,
        required: false,
    },
    active_at: {
        type: Date,
        required: false,
    },
    availability: {
        type: Number,
        required: true,
    },
    auto_offline: {
        type: Boolean,
        required: true,
    },
});

const accountUserModel = model<AccountUser & Document>('AccountUser', accountUserSchema);

export default accountUserModel;
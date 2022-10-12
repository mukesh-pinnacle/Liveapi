import { model, Schema, Document } from 'mongoose';
import { Role } from '@interfaces/roles.interface';

const roleSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    privileges: {
        type: [
            {
                module: {
                    type: String,
                    required: true,
                },
                actions: {
                    type: [String],
                    required: true,
                }
            }
        ],
        required: true,
    },
    created_at: {
        type: Date,
        required: false,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        required: false,
        default: Date.now,
    },
});

const roleModel = model<Role & Document>('Role', roleSchema);

export default roleModel;
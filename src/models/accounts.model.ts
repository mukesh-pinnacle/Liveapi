import { model, Schema, Document } from 'mongoose';
import { Account } from '@interfaces/accounts.interface';

const accountsSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
  locale: {
    type: Number,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  support_email: {
    type: String,
    required: true,
  },
  settings_flags: {
    type: Number,
    required: true,
  },
  feature_flags: {
    type: Number,
    required: true,
  },
  auto_resolve_duration: {
    type: Number,
    required: true,
  },
  limits: {
    type: Object,
    required: true,
  },
  is_active: {
    type: Number,
    required: true,
  },
});

const accountsModel = model<Account & Document>('Accounts', accountsSchema);

export default accountsModel;

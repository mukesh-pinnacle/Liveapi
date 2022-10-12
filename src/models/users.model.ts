import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: false,
  },
  uid: {
    type: String,
    required: false,
  },
  reset_password_token: {
    type: String,
    required: false,
  },
  reset_password_sent_at: {
    type: Date,
    required: false,
  },
  remember_created_at: {
    type: Date,
    required: false,
  },
  sign_in_count: {
    type: Number,
    required: false,
  },
  current_sign_in_at: {
    type: Date,
    required: false,
  },
  last_sign_in_at: {
    type: Date,
    required: false,
  },
  current_sign_in_ip: {
    type: String,
    required: false,
  },
  last_sign_in_ip: {
    type: String,
    required: false,
  },
  confirmation_token: {
    type: String,
    required: false,
  },
  confirmed_at: {
    type: Date,
    required: false,
  },
  confirmation_sent_at: {
    type: Date,
    required: false,
  },
  unconfirmed_email: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  display_name: {
    type: String,
    required: false,
  },
  tokens: {
    type: Object,
    required: false,
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
  pubsub_token: {
    type: String,
    required: false,
  },
  availability: {
    type: Number,
    required: false,
  },
  ui_settings: {
    type: Object,
    required: false,
  },
  custom_attributes: {
    type: Object,
    required: false,
  }
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;

export interface User {
  _id: string;
  email: string;
  password: string;
  provider: string;
  uid: string;
  reset_password_token: string;
  reset_password_sent_at: Date;
  remember_created_at: Date;
  sign_in_count: number;
  current_sign_in_at: Date;
  last_sign_in_at: Date;
  current_sign_in_ip: string;
  last_sign_in_ip: string;
  confirmation_token: string;
  confirmed_at: Date;
  confirmation_sent_at: Date;
  unconfirmed_email: string;
  name: string;
  display_name: string;
  tokens: object;
  created_at: Date;
  updated_at: Date;
  pubsub_token: string;
  availability: number;
  ui_settings: object;
  custom_attributes: object;
}
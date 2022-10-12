export interface Account {
  _id: string;
  name: String;
  created_at: Date;
  updated_at: Date;
  locale: Number;
  domain: String;
  support_email: String;
  settings_flags: Number;
  feature_flags: Number;
  auto_resolve_duration: Number;
  limits: Object;
  is_active: Number;
}

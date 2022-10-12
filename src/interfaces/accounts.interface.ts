export interface Account {
  _id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  locale: number;
  domain: string;
  support_email: string;
  settings_flags: number;
  feature_flags: number;
  auto_resolve_duration: number;
  limits: Object;
  is_active: number;
}

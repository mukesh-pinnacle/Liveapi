export interface Team {
    _id: string;
    account_id:number
    name : string;
    description:string;
    is_active: number;
    allow_auto_assign:number;
    created_at: Date;
    updated_at: Date;
  }
  
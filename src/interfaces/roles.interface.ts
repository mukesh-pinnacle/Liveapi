export interface Role {
    _id: string;
    name: string;
    privileges: Privilege[]
    created_at: Date;
    updated_at: Date;
}
  
export interface Privilege {
    module: string
    actions: string[]
}

  
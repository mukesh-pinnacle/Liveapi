import { ObjectId } from "mongoose";

export interface AccountUser {
    _id: string;
    account_id: ObjectId;
    user_id: ObjectId;
    role: ObjectId;
    inviter_id: ObjectId;
    created_at: Date;
    updated_at: Date;
    last_seen_at: Date;
    active_at: Date;
    availability: number;
    auto_offline: boolean;
}
import { model, Schema, Document } from 'mongoose';
import { Team } from '@interfaces/team.interface';
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const TeamSchema: Schema = new Schema({
    
    account_id: { 
        //type:Number,
        type: Schema.Types.ObjectId, 
        ref: 'Accounts',
        required: true, 
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    allow_auto_assign:{
        type: Boolean
    },
    is_active: {
        type: Number,
        default:1,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    }
  

});


//accountsSchema.plugin(mongoosePaginate);

const TeamModel = model<Team & Document>('Team', TeamSchema);

export default TeamModel;

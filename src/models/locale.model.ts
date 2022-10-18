import { model, Schema, Document } from 'mongoose';
import { Locale } from '@interfaces/locale.interface';
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const LocaleSchema: Schema = new Schema({
  lng_id: {
    type: Number,
    unique: true,
  },
  lng: {
    type: String,
    unique: true,
    required: true,
  },
  is_active: {
    type: Number,
    required: true,
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
  },
 
});

LocaleSchema.plugin(AutoIncrement, {
  id: 'LocaleSchema',
  inc_field: 'lng_id',
});
//accountsSchema.plugin(mongoosePaginate);

const LocleModel = model<Locale & Document>('Locale', LocaleSchema);

export default LocleModel;

import { model, Schema, Document } from 'mongoose';
import { Locale } from '@interfaces/locale.interface';

const LocaleSchema: Schema = new Schema({
  id: {
    type: Number,
    required: true,
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
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now
  },
 
  
});

const LocleModel = model<Locale & Document>('Locale', LocaleSchema);

export default LocleModel;

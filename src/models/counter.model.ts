import { model, Schema, Document } from 'mongoose';
//import {  } from '@interfaces/locale.interface';
import { Counter } from '@/interfaces/counter.interface';

const CounterSchema: Schema = new Schema({
    _id: {
        type: String,
        required: true
    },
    seq: {
        type: Number,
        required: true
    }
   
    
  });
  
  const CounterModel = model<Counter & Document>('Counter', CounterSchema);
  

  const getSequenceNextValue = (seqName) => {
    return new Promise((resolve, reject) => {
        CounterModel.findByIdAndUpdate(
            { "_id": seqName },
            { "$inc": { "seq": 1 } }
            , (error, counter) => {
                if (error) {
                    reject(error);
                }
                if(counter) {
                    resolve(counter.seq + 1);
                } else {
                    resolve(null);
                }
            });
    });
};

const insertCounter = (seqName) => {
    const newCounter = new CounterModel({ _id: seqName, seq: 1 });
    return new Promise((resolve, reject) => {
    newCounter.save()
        .then(data => {
            resolve(data.seq);
        })
        .catch(err => reject(err));
    });
}

export default {
    CounterModel,
    getSequenceNextValue,
    insertCounter
};
  
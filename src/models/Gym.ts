import { Schema, type InferSchemaType, model } from 'mongoose';

const schema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
  }
);


export type GymModel = InferSchemaType<typeof schema>;
export const Gym = model('Gym', schema);


// NoSQL -> MongoDb                 : collection
// Relational -> MySQl, SQL Server  : table


//Front Office - Vitrin
//Back Office  - 
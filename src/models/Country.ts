import { Schema, type InferSchemaType, model } from 'mongoose';

const schema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    flag: { type: String },
  }
);

export type CountryModel = InferSchemaType<typeof schema>;
export const Country = model('Country', schema);


// NoSQL -> MongoDb                 : collection
// Relational -> MySQl, SQL Server  : table


type XType = {
  a: number
  b: boolean
}

let a: string;
let x: XType = {
  a: 1,
  b: true
};


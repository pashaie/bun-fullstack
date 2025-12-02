import { Schema, type InferSchemaType, model } from 'mongoose';

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    auther: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }
);


export type BlogModel = InferSchemaType<typeof blogSchema>;
export const Blog = model('Blog', blogSchema);


// NoSQL -> MongoDb                 : collection
// Relational -> MySQl, SQL Server  : table
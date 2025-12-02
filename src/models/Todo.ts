import { Schema, type InferSchemaType, model } from 'mongoose';

const todoSchema = new Schema(
  {
    title: { type: String, required: true },
    completed: Boolean,
    createdAt: { type: Date, default: Date.now },
  }
);

export type TodoModel = InferSchemaType<typeof todoSchema>;
export const Todo = model('Todo', todoSchema);


// NoSQL -> MongoDb                 : collection
// Relational -> MySQl, SQL Server  : table
import type { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const model = new Todo({ title });
    await model.save();
    res.status(201).send(model);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const readTodos = async (req: Request, res: Response) => {
  try {
    const models = await Todo.find({});
    res.status(200).send(models);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const readTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Todo.findById(id);
    if (!model) {
      res.status(404).send();
    }
    res.status(200).send(model);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Todo.findByIdAndUpdate(id,
      {
        title: req.body.title,
        completed: req.body.completed
      },
      {
        new: true,
        runValidators: true
      });
    if (!model) {
      res.status(404).send();
    }
    res.status(200).send(model);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Todo.findByIdAndDelete(id);
    if (!model) {
      res.status(404).send("Todo wasn't found");
    }
    res.status(200).send(model);
  } catch (error) {
    res.status(500).send(error);
  }
};
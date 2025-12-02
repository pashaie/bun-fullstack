import type { Request, Response } from 'express';
import { Blog } from '../models/Blog';

export const create = async (req: Request, res: Response) => {
  try {
    const { title, content, auther, category } = req.body;
    //Validation
    //Business logic
    const model = new Blog({ title, content, auther, category });
    await model.save();
    res.status(201).send(model);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const read = async (req: Request, res: Response) => {
  try {
    const models = await Blog.find({});
    res.status(200).send(models);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const readById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Blog.findById(id);
    if (!model) {
      res.status(404).send();
    }
    res.status(200).send(model);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Blog.findByIdAndUpdate(id,
      {
        title: req.body.title,
        content: req.body.content,
        auther: req.body.auther
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

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Blog.findByIdAndDelete(id);
    if (!model) {
      res.status(404).send("Todo wasn't found");
    }
    res.status(200).send(model);
  } catch (error) {
    res.status(500).send(error);
  }
};
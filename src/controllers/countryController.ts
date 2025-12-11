import type { Request, Response } from 'express';
import { Country } from '../models/Country';

export const create = async (req: Request, res: Response) => {
  try {
    const { name, code, flag } = req.body;
    //Validation
    //Business logic
    const model = new Country({ name, code, flag });
    await model.save();
    res.status(201).send(model);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const read = async (req: Request, res: Response) => {
  try {
    const models = await Country.find({});
    res.status(200).send(models);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const readById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Country.findById(id);
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
    const model = await Country.findByIdAndUpdate(id,
      {
        name: req.body.name,
        code: req.body.code,
        flag: req.body.flag,
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
    const model = await Country.findByIdAndDelete(id);
    if (!model) {
      res.status(404).send("Item wasn't found");
    }
    res.status(200).send(model);
  } catch (error) {
    res.status(500).send(error);
  }
};
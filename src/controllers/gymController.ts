import type { Request, Response } from 'express';
import { Gym } from '../models/Gym';

export const create = async (req: Request, res: Response) => {
  try {
    const { name, address, phone } = req.body;
    //Validation
    //Business logic
    const model = new Gym({ name, address, phone });
    await model.save();
    res.status(201).send(model);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const read = async (req: Request, res: Response) => {
  try {
    const models = await Gym.find({});
    res.status(200).send(models);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const readById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const model = await Gym.findById(id);
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
    const model = await Gym.findByIdAndUpdate(id,
      {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.title,
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
    const model = await Gym.findByIdAndDelete(id);
    if (!model) {
      res.status(404).send("Item wasn't found");
    }
    res.status(200).send(model);
  } catch (error) {
    res.status(500).send(error);
  }
};
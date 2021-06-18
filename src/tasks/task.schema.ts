import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  name: String,
  description: String,
  created: Date,
  deadline: Date,
  completed: Boolean,
});

export interface Task {
  id: string;
  name: string;
  description: string;
  created: Date;
  deadline: Date;
  completed: boolean;
}

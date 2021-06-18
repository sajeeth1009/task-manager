import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDto } from './task.dto';
import { Task } from './task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Tasks') private readonly taskModel: Model<Task>) {}

  async create(taskDto: TaskDto) {
    const newTask = new this.taskModel(taskDto);
    const task = await newTask.save();
    return task.id as string;
  }

  async findAll() {
    const tasks = await this.taskModel.find().exec();
    return tasks.map((task) => this.mapper(task));
  }

  async findOne(id: string) {
    try {
      const task: Task = await this.taskModel.findById(id).exec();
      if (!task)
        throw new NotFoundException(`Failed to fetch Task with id: ${id}`);
      return this.mapper(task);
    } catch (error) {
      throw new NotFoundException(`Failed to fetch Task with id: ${id}`);
    }
  }

  async update(id: string, taskDto: TaskDto) {
    try {
      const updatedTask = await this.taskModel
        .findByIdAndUpdate(id, taskDto, { new: true, useFindAndModify: false })
        .exec();
      return this.mapper(updatedTask);
    } catch (error) {
      throw new NotFoundException(`Failed to update Task with id: ${id}`);
    }
  }

  async remove(id: string) {
    try {
      const deletedTask = await this.taskModel.findByIdAndDelete(id, {
        useFindAndModify: false,
      });
      return this.mapper(deletedTask);
    } catch (error) {
      throw new NotFoundException(`Failed to delete Task with id: ${id}`);
    }
  }

  mapper = (task: Task) => ({
    id: task.id,
    name: task.name,
    description: task.description,
    created: task.created,
    deadline: task.deadline,
    completed: task.completed,
  });
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TaskService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema } from './task.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tasks', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TasksModule,
    MongooseModule.forRoot(process.env.DB_CONNECTION_STR),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

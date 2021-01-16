import {Controller, Get} from '@nestjs/common';
import {TasksService} from '../services/tasks.service';
import {Task} from './../model/task.model';

@Controller('tasks')
export class TasksController {
  public constructor(private tasksService: TasksService) {}

  @Get()
  public getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
}

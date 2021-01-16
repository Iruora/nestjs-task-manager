import {TasksService} from './tasks.service';
import {Controller} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  public constructor(private tasksService: TasksService) {}
}

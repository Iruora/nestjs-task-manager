import {Injectable} from '@nestjs/common';
import {tasks} from './../../../test/mocks/tasks.mock';
import {Task} from './../model/task.model';

@Injectable()
export class TasksService {
  private tasks = tasks;

  public getAllTasks(): Task[] {
    return this.tasks;
  }
}

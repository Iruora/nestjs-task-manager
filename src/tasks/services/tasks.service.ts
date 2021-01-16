import {tasks} from './../../../test/mocks/tasks.mock';
import {Injectable} from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = tasks;

  public getAllTasks(): any[] {
    return this.tasks;
  }
}

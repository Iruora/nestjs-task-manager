import {Test, TestingModule} from '@nestjs/testing';
import {TasksService} from '../services/tasks.service';
import {TasksController} from './tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return tasks data as an array', () => {
    const tasksData = controller.getAllTasks();

    expect(tasksData.length).toBeDefined();
    expect(typeof tasksData.length).toBe('number');
  });
});

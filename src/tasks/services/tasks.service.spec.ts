import {Test, TestingModule} from '@nestjs/testing';
import {TasksService} from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return tasks data as an array', () => {
    const tasksData = service.getAllTasks();

    expect(tasksData.length).toBeDefined();
    expect(typeof tasksData.length).toBe('number');
  });
});

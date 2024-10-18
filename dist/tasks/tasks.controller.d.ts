import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Request } from 'express';
import { Task } from 'src/entities/task.entity';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(req: Request): Promise<Task[]>;
    findOne(id: number, req: Request): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto, req: Request): Promise<void>;
    delete(id: number, req: Request): Promise<void>;
}

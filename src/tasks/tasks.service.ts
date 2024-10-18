/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { User } from '../entities/user.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create(createTaskDto);
    return this.tasksRepository.save(task);
  }

  async findAllByUser(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number, userId: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id, user: { id: userId } } });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, userId: number): Promise<void> {
    const task = await this.tasksRepository.findOne({ where: { id, user: { id: userId } } });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    await this.tasksRepository.update(id, updateTaskDto);
  }

  async delete(id: number, userId: number): Promise<void> {
    const task = await this.tasksRepository.findOne({ where: { id, user: { id: userId } } });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    await this.tasksRepository.delete(id);
  }
}

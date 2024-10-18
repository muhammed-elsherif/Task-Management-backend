/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
import { Task } from 'src/entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    // const userId = req.user.id;
    return this.tasksService.create(createTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: Request): Promise<Task[]> {
    // const userId = req.user.id;
    return this.tasksService.findAllByUser();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number, @Req() req: Request): Promise<Task> {
    const userId = req.user.id;
    return this.tasksService.findOne(id, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto, @Req() req: Request): Promise<void> {
    const userId = req.user.id;
    return this.tasksService.update(id, updateTaskDto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: number, @Req() req: Request): Promise<void> {
    const userId = req.user.id;
    return this.tasksService.delete(id, userId);
  }
}

import { Task } from './task.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    tasks: Task[];
}

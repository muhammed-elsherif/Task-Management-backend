import { User } from './user.entity';
export declare class Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}

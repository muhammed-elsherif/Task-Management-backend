export declare class CreateTaskDto {
    title: string;
    description: string;
    dueDate: Date;
    category: string;
}
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    dueDate?: Date;
    isCompleted?: boolean;
    category?: string;
}

export interface Task {
    dueDate: string,
    category : string,
    title: string,
    description: string
}

export type TaskCategory = 'to-do' | 'completed' | 'upcoming';
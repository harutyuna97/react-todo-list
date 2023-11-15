export interface ITodo {
    id: number;
    title: string;
    description: string;
    deadline: string;
    status: string;
}

export interface ICreateFormModel {
    title: string,
    description: string,
    deadline: string
}
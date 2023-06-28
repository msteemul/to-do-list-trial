export interface TodoFormProps {
    id: number;
    todo:{
        data: string;
        completed: boolean;
    };
}


export interface EditTodoFormProps {
    todoEdit:string;
}
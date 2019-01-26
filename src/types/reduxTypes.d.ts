
declare module "reduxTypes" {

    export interface ITodo {
        readonly text: string;
        readonly done: boolean;
    }
    export interface ITodoState {
        readonly todoList: ITodo[];
    }

    export interface IData {
        text: string;
        number: number;
    }
    export interface IDataState {
        data: IData[];
        loading: boolean;
        error?: string;
    }

    export interface IApplicationState {
        todo: ITodoState;
        data: IDataState;
    }

}


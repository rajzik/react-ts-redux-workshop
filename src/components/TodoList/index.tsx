import React from 'react';
import { ITodoState } from 'reduxTypes';
import { Todo } from '@components';

export default function TodoList({ todoList }: ITodoState) {
    console.log(todoList);
    return (<div>
        {
            todoList.map((item, index) => <Todo {...item} id={index} />)
        }
    </div>)
}
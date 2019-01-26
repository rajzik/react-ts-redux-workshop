import React from 'react';
import { ITodo } from 'reduxTypes';

interface TodoProps extends ITodo {
    id: number;
}

export default function Todo({ text, done }: TodoProps) {
    return (<div>
        {text}
        <input type="checkbox" checked={done} />
    </div>);
}


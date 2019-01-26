import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState, ITodoState } from 'reduxTypes';
import { TodoList } from '@components';
import { Dispatch } from 'redux';
import { TodoActions } from '@actions';

interface TodoProps extends ITodoState {
    addTodo: (text: string) => void;
    heading: string;
}
interface TodoState {
    text: string;
}

class TodoContainer extends Component<TodoProps, TodoState> {
    state = {
        text: '',
    }
    onAddTodo = () => {
        const { addTodo } = this.props;
        const { text } = this.state;


        addTodo(text);
        this.setState({
            text: '',
        });
    };
    onChange = ({ target: { value }}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: value,
        });
    }

    render() {
        const { todoList, heading } = this.props;
        const { text } = this.state;
        return (<>
            <h1>{heading}</h1>
            <TodoList todoList={todoList} />
            <div>
                <input type="text" onChange={this.onChange} value={text} />
                <button onClick={this.onAddTodo} type="button">
                    Add todo
                </button>
            </div>
        </>);
    }
}

const mapStateToProps = ({ todo: { todoList } }: IApplicationState) => ({
    todoList
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodo: (text: string) => dispatch(TodoActions.todoAdd(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);


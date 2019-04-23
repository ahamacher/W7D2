import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'

class TodoList extends React.Component {

    titles() {
        return this.props.todos.map(({ id, title }) =>
            <TodoListItem key={id} title={title} />
            )
    }
     
    render() {
        const { receiveTodo } = this.props;
        return(
            <div>
                <TodoForm receiveTodo={receiveTodo}/>
                <h3>Todo List goes here!</h3>
                <ul>
                    {this.titles()}
                </ul>
            </div>
        );
    }
}


export default TodoList;
import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable */
const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);
/* eslint-enable */
export default TodoList;

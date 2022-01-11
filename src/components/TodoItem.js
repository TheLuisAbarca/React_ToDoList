import React from 'react';
import styles from './TodoItem.module.css';

/* eslint-disable */
const TodoItem = (props) => {
  const [state, setState] = React.useState({ editing: false });
  const {
    handleChangeProps,
    deleteTodoProps,
    setUpdate,
    todo } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setState({
      editing: true,
    });
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setState({ editing: false });
    }
  };

  const viewMode = {};
  const editMode = {};

  if (state.editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <button type="submit" onClick={() => deleteTodoProps(todo.id)}>
          Delete
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={(e) => {
          setUpdate(e.target.value, todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
/* eslint-enable */

export default TodoItem;

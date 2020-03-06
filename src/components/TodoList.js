import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ todos, toggleTodo}) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id} onClick={ () => toggleTodo(todo.id) } {...todo}/>
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
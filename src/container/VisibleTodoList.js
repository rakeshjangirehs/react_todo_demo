import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilter } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos;
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error("Unknown Filter: " + filter);
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
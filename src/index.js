import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log('Todos:', todoList.todos);

// const tarea = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);

// tarea.completado = false;


// console.log(todoList);

// crearTodoHtml( tarea );


// localStorage.setItem('mi-key', 'ABC123');
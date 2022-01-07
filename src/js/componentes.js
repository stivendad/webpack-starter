import { Todo } from "../classes";
import { todoList, TodoList } from "../index";

// Referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');


export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ?  'checked' : ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;


    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}


// Eventos 

txtInput.addEventListener('keyup', (event) => {
    
    if (event.keyCode === 13 && txtInput.value.length > 0) {
            // console.log(txtInput.value); // Se utiliza para validar el valor agregado despues de presionar enter keycode=13
            const nuevoTodo = new Todo( txtInput.value );
            todoList.nuevoTodo(nuevoTodo);
            
            // Agregando al html el nuevo Todo
            crearTodoHtml(nuevoTodo);
            
            // Limpiando el campo input
            txtInput.value = '';
    }

});


divTodoList.addEventListener('click', (event) => {

    // console.log('click');
    // console.log(event.target.localName);
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')) { // click en el chek
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
    } else if(nombreElemento.includes('button')) {
        
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }

});
import './style.css'
import initLoad from "./initLoad";
//import insertTodoDom from "./insertTodoDom";
//import insertTodo from "./insertTodo";
import {createTodo} from "./insertTodo";
import {insertTodoDom} from "./insertTodoDom";
//create project class and call todo class inside everytime one clicks
initLoad();

const addTodo = document.getElementById('add-todo');

addTodo.addEventListener('click', ()=>{
    //insertTodoDom();
    modal.style.display = 'flex';
})

const todoForm = document.getElementById('todo-form');

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault(); //to prevent refresh
    const formData = new FormData(todoForm);
    let title = formData.get('title_input');
    let desc = formData.get('desc_input');
    let date = formData.get('date_input');
    let priority = formData.get('priority_input');
    let todo = new createTodo(title,desc,date,priority);
    //console.log(todo);
    insertTodoDom(todo);
    modal.style.display = 'none';
    todoForm.reset();
})

//addEventListener yha to listen to todoForm on submit{
//    new todo(title,desc etc);
//    push todo to Array;//TBD
//    function to insert new todoDOM(title,desc etc)
//}
//
//now create new array project1[] and push todo
//add function to create new array when add project is clicked with custom name
//on click project1 or .. populate dom with that array

const todos = document.getElementsByClassName('todos')[0]; //both lines are hack so I can select and append DOM 'ul'
export {todos};
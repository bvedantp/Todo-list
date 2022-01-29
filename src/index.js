import './style.css'
import initLoad from "./initLoad";
//import insertTodoDom from "./insertTodoDom";
//import insertTodo from "./insertTodo";
import {createTodo} from "./insertTodo";
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
    //console.log(priority)
    let todo = new createTodo(title,desc,date,priority);
    console.log(todo);
})

//addEventListener yha to listen to todoForm on submit{
//    new todo(title,desc etc);
//    push todo to Array;
//    function to insert new todoDOM(title,desc etc)
//}

//todoForm.addEventListener('submit', insertTodo);//export todo

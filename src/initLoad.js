import {insertFormDom} from "./insertFormDom";

const content = document.getElementById('content');

let initLoad = ()=>{
    let projList = document.createElement('div');
    projList.classList.add('proj-list');
    let addProj = document.createElement('button');
    addProj.innerHTML = 'Add Project +';
    let projName = document.createElement('h4');
    projName.innerHTML = 'Project 1';

    let allTodos = document.createElement('div');
    allTodos.classList.add('all-todos');
    let heading = document.createElement('h3');
    heading.innerText = 'Project 1';
    let todoList = document.createElement('ul');
    todoList.classList.add('todos');
    todoList.innerHTML = `<li><button></button> This is one tododaaadaddddddddd <div>2022-01-07</div> <i class="far fa-trash-alt"></i><p hidden>This is hide</p></li>
    <li><button></button>This is another todo <div></div> <i class="far fa-trash-alt"></i></li>`;
    
    let addTodo = document.createElement('button');
    addTodo.id = "add-todo";
    addTodo.innerText = '+';

    content.appendChild(projList);
    content.appendChild(allTodos);
    content.appendChild(addTodo);

    projList.appendChild(addProj);
    projList.appendChild(projName);

    allTodos.appendChild(heading);
    allTodos.appendChild(todoList);

    insertFormDom();
}

export default initLoad;
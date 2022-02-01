import './style.css'
import initLoad from "./initLoad";
//import insertTodoDom from "./insertTodoDom";
//import insertTodo from "./insertTodo";
import {createTodo} from "./insertTodo";
import {insertTodoDom} from "./insertTodoDom";
//create project class and call todo class inside everytime one clicks
initLoad();

let allProj = {};

const addTodo = document.getElementById('add-todo');

let activeProj = `Project 1`; //replace projName with this bcoz this is grobal and accesible to all
allProj[activeProj] = []; //initialise default array to store todos

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
    //the easiesrt way is to create another entry of projName here and 
    //use allProj[`$[projName]`].push(todo)
    if(activeProj == null){
        activeProj = `Project 1`;
    }
    allProj[`${activeProj}`].push(todo);
   // console.log(`${activeProj} :`);
   // console.log(allProj[`${activeProj}`]);
    insertTodoDom(todo);
    modal.style.display = 'none';
    let priorLabel = document.getElementById('priorLabel');
    priorLabel.textContent = `low`;
    todoForm.reset();
})

const addProj = document.querySelector('.proj-list button');
const projList = document.querySelector('.proj-list');
//const projHeading = document.querySelector('.proj-list h4');

addProj.addEventListener('click',()=>{
    let activeProj = prompt(`name of the project?`);
    let newProj = document.createElement('h4');
    projList.appendChild(newProj);
    newProj.textContent = `${activeProj}`;
    allProj[`${activeProj}`] = []; //for now initialise to empty

})

//const todoArea = document.querySelector('.all-todos');
const header = document.querySelector('.all-todos h3');

projList.addEventListener('click',(e)=>{
    let targetType = `${e.target}`; //e.target.value wont work here
    if(targetType === `[object HTMLHeadingElement]`) {
        activeProj = `${e.target.innerText}`;
        todos.innerHTML = ' ';
        header.innerText = `${activeProj}`;

        let listLength = allProj[`${activeProj}`].length;
        //console.log(allProj[`${activeProj}`][0]);
        for(let i=0;i<listLength;i++){
            let todo = allProj[`${activeProj}`][i];
            insertTodoDom(todo);
           // console.log(todo.title);
        }
        //now here phle clear all innerhtml of all-todos class
        //append h3 named activeProj
        //forEach chalao on let todo = allProj[`${activeProj}`][i]
        //insertTodoDom(todo)

        //projName = activeProj;
       // console.log(activeProj);
    }
    
})

//addEventListener yha to listen to todoForm on submit{
//    new todo(title,desc etc);
//    push todo to Array;
//    function to insert new todoDOM(title,desc etc)
//}
//add eventlistener on add project to create new array on click
//create object overall that stores all arrays obj = {'proj1':[todo1,todo2], ...}
//obj[`${name}`] this is used to generate key of objects as user will enter name of project
//now create new array project1[] and push todo
//add function to create new array when add project is clicked with custom name
//on click project1 or .. populate dom with that array

//let deleteIcon = document.querySelector('i');
const todos = document.getElementsByClassName('todos')[0]; //both lines(this and below export) are hack so I can select and append DOM 'ul'

todos.addEventListener('click',(e)=>{ //this is called EVENT DELEGATION
    if(e.target.nodeName == 'I'){     //meaning use bubbling to target the parent element 
        //console.log('works');      //and attach event to the actual targeted child(which is dynamically generated and so can't be selected)
        let currProj = document.querySelector('.all-todos h3').innerText;
        let targetTitle = e.target.closest('li').innerText.split('\n')[0]; //closest finds the parent and split splits on line break
        let currArray = allProj[currProj];
        for(let i=0;i<currArray.length;i++){
            let deleteNode = allProj[currProj][i].title;
            if(deleteNode == `${targetTitle}`){
                //console.log(deleteNode);
                currArray.splice(i,1);
                e.target.closest('li').remove();
            } 
        }
        // let deleteNode = allProj[currProj][i].find(`${targetTitle}`);
        
    }
})

//onto delete operation
//first h3 e.target value lo for actuveProj
//then title value of icon jha delete dabaya h
//array.find in that allProj[activeProj] m that value
//jo return hui delete it


export {todos};
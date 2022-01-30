//const todos = document.getElementsByClassName('todos')[0];
import {todos} from "./index"; //so I can have the same functionality as the above line
function insertTodoDom(todo){
    //    console.log(todo.title)
    console.log(todos);
    let newList = document.createElement('li');
    let button = document.createElement('button');
    let date = document.createElement('div');
    let para = document.createElement('p');
    let trashIcon = document.createElement('i');


    //newList.textContent = `${todo.title}`;  this is not used bcoz it resets all the inserted elements before it
    
    todos.appendChild(newList);
    newList.appendChild(button);
    newList.insertAdjacentText("beforeend", `${todo.title}`); //to insert just after priority button
    newList.appendChild(date);
    newList.appendChild(trashIcon);
    newList.appendChild(para);

    para.setAttribute("hidden", "");
    trashIcon.setAttribute("class", "far fa-trash-alt");
    date.textContent = `${todo.date}`; 
    para.textContent = `${todo.desc}`;
    
    let priority = todo.priority;
    switch(priority) {
        case "low":
            button.classList.add('.yellow');
            button.style.border = "border: 1px solid grey";
            button.style.backgroundColor = "rgba(119, 110, 110, 0.315)";
            
            //classlist remove green and red //css class green red yellow
            break;
        
        case "medium":
            //code
            button.classList.add('.green');
            button.style.border = "border: 1px solid green";
            button.style.backgroundColor = "rgba(153, 205, 50, 0.411)";
            break;
        
        case "high":
            button.classList.add('.red');
            button.style.border = "border: 1px solid red";
            button.style.backgroundColor = "rgba(245, 59, 59, 0.452)";
            break;

        default :
            //code
    }

}

export {insertTodoDom}
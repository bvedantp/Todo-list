//yha dom bnao form ki
//this will go in index.js jha event listener we'll call


const modal = document.getElementById('modal');

/*
    <form id="todo-form" action="#" method="POST">
        <label>Create your new To-Do</label>
        <input id="title" name="title_input" type="text" placeholder="Title" required/>
        <input id="desc" name="desc_input" type="text" placeholder="Description"/>
        <input id="date" name="date_input" type="date"/>
        <div class="priority">
            <input type="radio" name="priority_input" value="high" id="hi">
            <input type="radio" name="priority_input" value="medium" id="med">
            <input type="radio" name="priority_input" value="low" id="lo">
        </div>
        <button class="submit-it" type="submit">Add this To-Do</button>
    </form>
 */
//wrap this in function
let insertFormDom = ()=>{
//modal.style.display = 'flex';
let form = document.createElement('form');
form.setAttribute("id", "todo-form");
form.setAttribute("action", "#");
form.setAttribute("method", "POST");

modal.appendChild(form);

let label = document.createElement('label');
label.innerText = "Create your new To-Do";
let title = document.createElement('input');
title.setAttribute("id", "title");
title.setAttribute("name", "title_input");
title.setAttribute("type", "text");
title.setAttribute("placeholder", "Title");
title.setAttribute("required", "");

let desc = document.createElement('input');
desc.setAttribute("id", "desc");
desc.setAttribute("name", "desc_input");
desc.setAttribute("type", "text");
desc.setAttribute("placeholder", "Description");

let date = document.createElement('input');
date.setAttribute("id", "date");
date.setAttribute("name", "date_input");
date.setAttribute("type", "date");

let priority = document.createElement('div');
priority.classList.add('priority');
priority.innerHTML = `<input type="radio" name="priority_input" value="high" id="hi">
<input type="radio" name="priority_input" value="medium" id="med">
<input type="radio" name="priority_input" value="low" id="lo" checked>`;
let priorLabel = document.createElement('label');
priorLabel.textContent = `low`;

let submit = document.createElement('button');
submit.classList.add('submit-it');
submit.setAttribute("type", "submit");
submit.innerText = `Add new To-Do`;

form.appendChild(label);
form.appendChild(title);
form.appendChild(desc);
form.appendChild(date);
form.appendChild(priority);
priority.appendChild(priorLabel);
form.appendChild(submit);

priority.addEventListener('click',(e)=>{
    let value = e.target.value;
    //console.log(typeof(value))
    if(!value){//to catch undefined values
        //priorLabel.textContent = ` `; 
    } else {
        priorLabel.textContent = `${value}`;
    }
})
};

export {insertFormDom};
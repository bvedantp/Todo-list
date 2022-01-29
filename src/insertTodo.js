class createTodo {
    constructor(title, desc = '', date = '', priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;
    }
}

export {createTodo}
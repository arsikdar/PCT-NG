
console.log('-index.js-')


//---------------------------------------------------------
// using DOM API
//---------------------------------------------------------


let box = document.querySelector('.alert')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')

hideBtn.addEventListener('click', e => {
    box.style.display = 'none';
})
showBtn.addEventListener('click', e => {
    box.style.display = '';
})



//---------------------------------------------------------
// using DOM API  + XHR / Fetch API
//---------------------------------------------------------

let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    let apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    let promise = fetch(apiUrl)
    promise
        .then(response => response.json())
        .then(todos => {
            let elements = todos.map((todo) => {
                return `
                    <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">${todo.id} - ${todo.title} - ${todo.completed}</li>
                `
            })
            document.getElementById('todo-list').innerHTML = elements.join(" ")
        })
})



//---------------------------------------------------------
// using DOM API  + Timer API
//---------------------------------------------------------


setInterval(() => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}, 1000);
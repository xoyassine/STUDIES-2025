const inputtodo = document.getElementById('todo-input');
const todolist = document.getElementById('todo-list');

// Fonction pour ajouter une tâche à la liste
function addtodo() {
    if (inputtodo.value === "") {
        alert("Veuillez entrer une tâche.");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputtodo.value;
        todolist.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&#10060;";
        li.appendChild(span);
        saveTodos();
    }
    inputtodo.value = "";
}

// Événement pour marqquer une tâche dans la liste comme terminée ou pour la supprimer
todolist.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        saveTodos();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTodos();
    }
}, false);

// Fonction pour sauvegarder la liste des tâches dans le stockage local
function saveTodos() {
    localStorage.setItem('todos', todolist.innerHTML);
}

// Fonction pour charger la liste des tâches depuis le stockage local
function loadTodos() {
    if (localStorage.getItem('todos')) {
        todolist.innerHTML = localStorage.getItem('todos');
    }
}

loadTodos();
// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === '12345') {
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
    } else {
      alert('Invalid username or password.');
    }
  });
  
  // Logout Functionality
  function logout() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('mainPage').style.display = 'none';
  }
  
  // Load Todo List
  function loadTodoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        var completedTasks = data.filter(task => task.completed);
        if (completedTasks.length >= 5) {
          alert(`Congrats. ${completedTasks.length} Tasks have been Successfully Completed`);
        }
        var todoListHTML = '<h2>Todo List</h2><ul class="list-group">';
        data.forEach(task => {
          todoListHTML += `<li class="list-group-item">${task.title} - ${task.completed ? 'Completed' : 'Pending'}</li>`;
        });
        todoListHTML += '</ul>';
        document.getElementById('todoList').innerHTML = todoListHTML;
      })
      .catch(error => console.error('Error fetching todo list:', error));
  }
  
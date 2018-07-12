let TODOS = [];
const $todoList = document.querySelector(".todo-list");

function update() {
  const $todoList = document.querySelector(".todo-list");
  const $todoCount = document.querySelector('.todo-count');
  $todoList.innerHTML = "";
  for (const item of TODOS) {
    const $li = document.createElement("li");
    // $li.setAttribute("id",item.id);

    if (item.done) {
      $li.classList.add("completed");
    }
    $todoList.appendChild($li);


    // Toggle button
    const $toggle = document.createElement("input");
    $toggle.className = "toggle";
    $toggle.setAttribute("type", "checkbox");
    if (item.done) {
      $toggle.setAttribute("checked", "checked");
    }
    $toggle.addEventListener("change", onToggleTodo.bind(null, item.id));
    $li.appendChild($toggle);
    
    // Label
    const $label = document.createElement("label");
    $label.innerHTML = item.title;
    $li.appendChild($label);

    // Delete button
    const $button = document.createElement("button");
    $button.className = "destroy";
    $button.addEventListener('click',onDeleteTodo.bind(null, item.id));
    
    $li.appendChild($button);
    
  // function onDeleteTodo(id){

  //   // const a2=$button.parentNode;
  //   $button.parentNode.parentElement.removeChild($button.parentNode);
  //   // console.log(a2);
  //   TODOS = TODOS.filter(todo=> todo.id !== id);
  //   // console.log(TODOS);
  //   update();
  //   //e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  // }
}

  
  //Set The Counter
  const $count = TODOS.filter(todo=> todo.done === false).length;
  if ($count === 1)
  $todoCount.innerHTML=$count +' item left' ;
  else
  $todoCount.innerHTML=$count +' items left' ;

  document.querySelector(".main").style.display = "block";
}


function onToggleTodo(id) {
  const todo = TODOS.find(todo => todo.id === id);
  // TODOS.find(function(todo) { return todo.id === id; });
  todo.done = !todo.done;

  update();
}
function onDeleteTodo(id){

  TODOS=TODOS.filter(todo=> todo.id !== id)

 update();
}

function onNewTodo(e) {
  const title = e.target.value;
  // Same as this line:
  //const title = document.querySelector(".new-todo").value;
  console.log(title);
  TODOS.push({
    id: Date.now(),
    title,
    done: false
  });
  update();
  e.target.value = "";
}

// Select the new todo input field.
const $newTodo = document.querySelector(".new-todo");
$newTodo.addEventListener("change", onNewTodo); 
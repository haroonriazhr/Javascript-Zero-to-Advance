//? Build a To-Do List App (add tasks, display them using arrays).

let todoList = [];

function addTask(t) {
    todoList.push(t);
    console.log(`Task ${t} Added!`);
};

function displayTodo(){
    if (todoList.length === 0) {
        console.log('List is Empty!');
    }
    else{
        console.log('TodoList is:')
        todoList.forEach((elem,idx)=>{
            console.log(`${idx+1}.${elem}`);
        });
    }
  
};
//* Bonus:
function removeTask(number) {
    if (number < 1 || number > todoList.length) {
      console.log("Invalid task number!");
    } else {
      let removed = todoList.splice(number - 1, 1);
      console.log(`Task "${removed[0]}" removed!`);
    }
  }


addTask('test');
addTask('test2');
addTask('test3');
removeTask(1);
displayTodo();

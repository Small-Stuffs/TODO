const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')



const handleSubmit = (e)=> {
  e.preventDefault();
  const todoValue = todoInput.value.trim();
  // todoInput.value = ''
  // console.log(todoValue)
  if(todoValue !== '' ) { //to enable empty todo
    todoInput.value = ''
    console.log(todoValue)
  }

}

// todoForm.addEventListener()
document.addEventListener('submit', handleSubmit)
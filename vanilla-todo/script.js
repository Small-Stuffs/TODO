const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')


// 1 submit todo/ forms
const handleSubmit = (e)=> {
  e.preventDefault();
  const todoValue = todoInput.value.trim();
  // todoInput.value = ''
  // console.log(todoValue)
  if(todoValue !== '' ) { //to enable empty todo
    todoInput.value = ''
    console.log(todoValue)
    addTodo(todoValue)
  }
}



const addTodo = (todoValue) => {
  const li = document.createElement('li')


  li.innerHTML = `
  <span>${todoValue}</span>
  
  `
  console.log(li)
  // const position = 'beforeend'
  
  todoList.append(li)
  todoList.insertBefore(li, todoList.childNodes[0])

  // const list = 'list';
  // list.insertBefore(todoList, list.children)
}






// todoForm.addEventListener()
document.addEventListener('submit', handleSubmit)
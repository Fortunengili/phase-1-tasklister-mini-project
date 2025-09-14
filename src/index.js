document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const input = document.querySelector('#new-task-description');
    makeToDo(input.value);
    form.reset();
  })
});
function makeToDo(myTodo){
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.className = 'button'
  btn.textContent = 'x' 
  btn.style.marginLeft = "10px"
  li.textContent = `${myTodo}`
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}
function handleDelete(e){
  e.target.parentNode.remove();
}
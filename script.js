(() =>{ // Inmediately invoked function expression IIFE
const btn = document.querySelector ('[data-form-btn]');

// Arrow function o funciones anonimas
const createTask = (evento) => {
    // Parte para ingresar el valor de entrada
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]') ;
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    // backticks
    // Contenedor div
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    // Contenedor span
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value
    taskContent.appendChild(titleTask);
    const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
};

// Listener
btn.addEventListener('click', createTask);

// Checkbox función "i"
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener('click', completeTask)
    return i;
}

// Boton de marcado de tarea
const completeTask = (event) =>{
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
}

})();
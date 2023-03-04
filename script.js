const btn = document.querySelector ('[data-form-btn]');

const createTask = (evento) => {
    // Parte para ingresar el valor de entrada
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
};


console.log(btn);

// Listener

// Arrow function o funciones anonimas
btn.addEventListener('click', createTask);



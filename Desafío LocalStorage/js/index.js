const campo = document.getElementById('inputText');
const boton = document.getElementById('buttonText');

boton.addEventListener('click', () => {
  localStorage.setItem('data', campo.value);
});
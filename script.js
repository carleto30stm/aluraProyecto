// Función para encriptar una palabra
function encriptarPalabra() {
  const palabra = document.getElementById('palabra').value.toLowerCase();
  let encriptada = '';
  if (palabra === ''){
    document.getElementById('resultado').style.color = 'grey';
    document.getElementById('resultado').innerText = 'ingrese un texto'
    return
  }
  // Validar si la palabra contiene mayúsculas o acentos
  if (/[A-ZÁÉÍÓÚ]/.test(palabra) || /[áéíóú]/.test(palabra)) {
      document.getElementById('resultado').style.color = 'red';
      document.getElementById('resultado').innerText = 'No se admiten mayúsculas o acentos.';
      return;
    }
    
    // Realizar la encriptación de la palabra
    encriptada = palabra.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    
    // Mostrar la palabra encriptada en el resultado
    document.getElementById('resultado').style.color = 'black';
    document.getElementById('resultado').innerText = encriptada;
    
    // Agregar la palabra encriptada a la lista de palabras guardadas
    const wordList = document.getElementById('wordList');
    const listItem = document.createElement('li');
    const listItemText = document.createTextNode(encriptada);
    listItem.appendChild(listItemText);
    wordList.appendChild(listItem);
    document.getElementById('palabra').value = '';
    document.getElementById('palabra').placeholder = 'Ingrese texto aqui';
  }
  
  // Función para desencriptar una palabra
  function desencriptarPalabra() {
    const palabra = document.getElementById('palabra').value.toLowerCase();
    let desencriptada = '';
    // Realizar la desencriptación de la palabra
    desencriptada = palabra.replace(/enter/g, 'e')
                          .replace(/imes/g, 'i')
                          .replace(/ai/g, 'a')
                          .replace(/ober/g, 'o')
                          .replace(/ufat/g, 'u');
  
    // Mostrar la palabra desencriptada en el resultado
    document.getElementById('resultado').style.color = 'black';
    document.getElementById('resultado').innerText = desencriptada;
  
  }
  // Quitar el placeholder al hacer click para que el texto quede centrado 
  function quitarPlaceholder() {
    document.getElementById('palabra').removeAttribute('placeholder');
}

// copiar el texto al hacer click sobre ella 

document.getElementById('wordList').addEventListener('click', function(event) {
  if (event.target && event.target.matches('li')) {
    const textToCopy = event.target.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
      const copySuccessMessage = document.getElementById('copySuccessMessage');
      copySuccessMessage.classList.add('show');
      setTimeout(function() {
        copySuccessMessage.classList.remove('show');
      }, 2000); // Ocultar el mensaje después de 2 segundos (2000 milisegundos)
    }).catch(function(err) {
      console.error('Error al copiar el texto al portapapeles', err);
    });
  }
});
// &copy con el año dinamico 
document.getElementById("year").textContent = new Date().getFullYear();

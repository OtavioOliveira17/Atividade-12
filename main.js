console.log('Olá mundo!');
let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Eai Arthur, só jogando baska ou qua?';
let elementoBody = document.body;
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

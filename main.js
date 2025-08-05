// Função para criar um enfeite de Natal
function criarEnfeite() {
  const enfeite = document.createElement('div');
  
  // Estiliza o enfeite
  const tamanhos = [10, 15, 20, 25, 30];
  const cores = ['red', 'green', 'gold', 'blue', 'silver'];
  const emojis = ['🎄', '⭐', '🎅', '🎁', '🔔']; // Decorações

  const tamanho = tamanhos[Math.floor(Math.random() * tamanhos.length)];
  const cor = cores[Math.floor(Math.random() * cores.length)];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  enfeite.textContent = emoji;
  enfeite.style.position = 'absolute';
  enfeite.style.top = '-40px';
  enfeite.style.left = Math.random() * window.innerWidth + 'px';
  enfeite.style.fontSize = `${tamanho}px`;
  enfeite.style.color = cor;
  enfeite.style.userSelect = 'none';
  enfeite.style.zIndex = 9999;

  document.body.appendChild(enfeite);

  // Animação de queda
  let posY = -40;
  const velocidade = 1 + Math.random() * 2;

  const animar = setInterval(() => {
    posY += velocidade;
    enfeite.style.top = posY + 'px';

    if (posY > window.innerHeight) {
      clearInterval(animar);
      enfeite.remove();
    }
  }, 16); // ~60fps
}

// Criar enfeites a cada intervalo de tempo
setInterval(criarEnfeite, 300);

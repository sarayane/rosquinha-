function createrosca() {
    const rosca = document.createElement('div');
    rosca.classList.add('rosca');
    
    // Posição aleatória
    const leftPosition = Math.random() * (window.innerWidth - 100); // 100 é a largura da rosquinha
    rosca.style.left = leftPosition + 'px';
    
    document.getElementById('rosca').appendChild(rosca);
    
    // Remove a rosquinha após a animação
    rosca.addEventListener('animationend', () => {
        rosca.remove();
    });
}

// Cria uma nova rosquinha a cada segundo
setInterval(createDonut, 1000);

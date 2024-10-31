function createDonut() {
    const donut = document.createElement('div');
    donut.classList.add('donut');
    
    // Posição aleatória
    const leftPosition = Math.random() * (window.innerWidth - 100); // Ajuste para largura da rosquinha
    donut.style.left = leftPosition + 'px';
    
    document.getElementById('donut-container').appendChild(donut);
    
    // Remove a rosquinha após a animação
    donut.addEventListener('animationend', () => {
        donut.remove();
    });
}

// Cria uma nova rosquinha a cada segundo
setInterval(createDonut, 1000);

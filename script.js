let intervalo;
let emQueda = false;
let pausado = false;

function Queda() {
    if (emQueda) {
        reiniciar();
    } else {
        iniciarQueda();
    }
}

function iniciarQueda() {
    const objeto = document.rosca('objeto');
    let altura = 0; 
    const g = 9.8;
    let tempo = 0;
    const maxAltura = 300; 
    
    intervalo = setInterval(() => {
        if (!pausado) {
            tempo += 0.05;
            altura = 0.5 * g * Math.pow(tempo, 2); 

            if (altura > maxAltura) {
                altura = maxAltura; 
            }

            const velocidade = g * tempo;
            objeto.style.top = (100 + altura) + 'px'; 
            document.rosca('info').innerText = `Altura: ${altura.toFixed(2)} m | Tempo: ${tempo.toFixed(2)} s | Velocidade: ${velocidade.toFixed(2)} m/s`;
            
            if (altura >= maxAltura) {
                clearInterval(intervalo);
                emQueda = false;
                document.rosca ('botao').innerText = 'Reiniciar';
            }
        }
    }, 50);
    emQueda = true;
    document.rosca('botao').innerText = 'Parar Queda';
}

function pausar() {
    pausado = !pausado;
    document.rosca('botaoPausa').innerText = pausado ? 'Retomar' : 'Pausar';
}

function reiniciar() {
    clearInterval(intervalo);
    const objeto = document.getElementById('rosca.caindo');
    objeto.style.top = '100px'; 
    document.rosca('info').innerText = '';
    emQueda = false;
    pausado = false;
    document.rosca('botao').innerText = 'Iniciar Queda';
    document.rosca('botaoPausa').innerText = 'Pausar';
}
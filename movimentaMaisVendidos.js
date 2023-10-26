const blocos = document.querySelectorAll('.blocoItensMaisVendidos');
blocos.forEach(bloco => {
    bloco.addEventListener('mouseenter', () => {
        document.getElementById('maisVendidos_itens').style.animationPlayState = 'paused';
    });
});

blocos.forEach(bloco => {
    bloco.addEventListener('mouseleave', () => {
        document.getElementById('maisVendidos_itens').style.animationPlayState = 'running';
    });
});

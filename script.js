// Função para remover bloqueios de copiar, colar e cortar
function removeBlock() {
    const preventDefault = function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        return true;
    };

    // Adiciona ouvintes de eventos para copiar, cortar e colar
    document.addEventListener("copy", preventDefault, true);
    document.addEventListener("cut", preventDefault, true);
    document.addEventListener("paste", preventDefault, true);
    
    alert("Bloqueios de copiar, colar e cortar foram removidos!");
}

// Chama a função para remover o bloqueio
removeBlock();

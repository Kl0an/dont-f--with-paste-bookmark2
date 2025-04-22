function removeBlock() {
    const preventDefault = function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        return true;
    };

    document.addEventListener("copy", preventDefault, true);
    document.addEventListener("cut", preventDefault, true);
    document.addEventListener("paste", preventDefault, true);
    
    alert("Block Removed!");
}

// Chame a função para remover o bloqueio
removeBlock();

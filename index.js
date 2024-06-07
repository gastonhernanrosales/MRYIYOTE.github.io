document.getElementById("girar").addEventListener("click", () => {
    const ruleta = document.getElementById("ruleta");
    const resultado = document.getElementById("resultado");
    const girarBtn = document.getElementById("girar");
    const premios = [
        "NO TE GANASTE NADA",
        "A TUS PAPAS LE PONEMOS CHEDDAR SIN CARGO",
        "EXTRA DE PAPAS",
        "NO TE GANASTE NADA",
        "JUGO VIDA DE 1,5",
        "NO TE GANASTE NADA",
        "COCA DE 500 ML",
        "NO TE GANASTE NADA"
    ];

    // Deshabilitar el botón para evitar múltiples clics
    girarBtn.disabled = true;

    const angulo = Math.floor(Math.random() * 360);
    const rotacion = 3600 + angulo; // 10 vueltas + el ángulo aleatorio

    ruleta.style.transition = "transform 4s ease-out";
    ruleta.style.transform = `rotate(${rotacion}deg)`;

    setTimeout(() => {
        const anguloFinal = (rotacion % 360) / 360 * 8;
        const premioSeleccionado = premios[Math.floor(anguloFinal)];
        resultado.textContent = `¡PREMIO: ${premioSeleccionado} ... TOMALE FOTO CAPTURA RAPIDO!!!!`;

        // Cerrar la página después de 10 segundos
        setTimeout(() => {
            window.close();
        }, 5000);
    }, 4000);
});


document.addEventListener("DOMContentLoaded", function() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
        window.location.href = "https://www.facebook.com/groups/239979266569845"; // Redirige a una página de agradecimiento
    } else {
        localStorage.setItem('hasVisited', 'true');
    }

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
        "CON TU PEDIDO TE GANASTE OTRO SANDWCH!!!"
    ];

    // Crear las secciones de la ruleta
    premios.forEach((premio, index) => {
        const slice = document.createElement("div");
        slice.className = "slice";
        slice.style.transform = `rotate(${index * 45}deg)`;
        ruleta.appendChild(slice);
    });

    document.getElementById("girar").addEventListener("touchstart", () => {
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
});

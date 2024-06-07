document.addEventListener("DOMContentLoaded", function() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
        alert("Ya has utilizado esta página. Cerrando en 2 segundos...");
        setTimeout(() => {
            window.close();
        }, 2000);
    } else {
        localStorage.setItem('hasVisited', 'true');
    }

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

    const ruleta = document.getElementById("ruleta");
    const resultado = document.getElementById("resultado");
    const girarBtn = document.getElementById("girar");

    // Crear las secciones de la ruleta
    premios.forEach((premio, index) => {
        const slice = document.createElement("div");
        slice.className = "slice";
        slice.style.transform = `rotate(${index * 45}deg)`;

        const content = document.createElement("div");
        content.textContent = premio;
        content.style.backgroundColor = `hsl(${index * 45}, 70%, 70%)`;
        slice.appendChild(content);

        ruleta.appendChild(slice);
    });

    document.getElementById("girar").addEventListener("click", () => {
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

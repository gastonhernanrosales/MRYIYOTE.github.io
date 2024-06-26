

document.addEventListener("DOMContentLoaded", function() {
    const lastPlayedDate = localStorage.getItem('lastPlayedDate');
    const today = new Date().toISOString().split('T')[0];

    const specialPrize = "NO TE GANASTE NADA";
    let specialPrizeAwarded = localStorage.getItem('specialPrizeAwarded');
    if (lastPlayedDate === today && specialPrizeAwarded) {
        specialPrizeAwarded = JSON.parse(specialPrizeAwarded);
    } else {
        specialPrizeAwarded = false;
        localStorage.setItem('lastPlayedDate', today);
        localStorage.setItem('specialPrizeAwarded', specialPrizeAwarded);
    }

    if (lastPlayedDate === today) {
        window.location.href = "agradecimiento.html"; // Redirige a una página de agradecimiento
        return;
    } else {
        localStorage.setItem('lastPlayedDate', today);
    }

    const ruleta = document.getElementById("ruleta");
    const resultadoRecuadro = document.getElementById("resultadoRecuadro");

    const premios = [
        "NO TE GANASTE NADA",
        "A TUS PAPAS LE PONEMOS CHEDDAR SIN CARGO",
        "EXTRA DE PAPAS",
        "NO TE GANASTE NADA",
        "TE GANASTE UN AGUA SABORIZADA DE 500 ML",
        "NO TE GANASTE NADA",
        "NO TE GANASTE NADA",
        "TE GANASTE UN AGUA SABORIZADA DE 500 ML"
    ];

    // Crear las secciones de la ruleta
    premios.forEach((premio, index) => {
        const slice = document.createElement("div");
        slice.className = "slice";
        slice.style.transform = `rotate(${index * 45}deg)`;
        ruleta.appendChild(slice);
    });

    const mostrarPremio = (premioSeleccionado) => {
        // Mostrar el premio en el recuadro
        resultadoRecuadro.textContent = `¡PREMIO: ${premioSeleccionado} ... TOMALE FOTO CAPTURA RAPIDO!!!!`;
        resultadoRecuadro.style.display = "block"; // Mostrar el recuadro
    };

    const girarRuleta = () => {
        // Deshabilitar el botón para evitar múltiples clics
        ruleta.removeEventListener("click", girarRuleta);
        
        const angulo = Math.floor(Math.random() * 360);
        const rotacion = 3600 + angulo; // 10 vueltas + el ángulo aleatorio

        ruleta.style.transition = "transform 4s ease-out";
        ruleta.style.transform = `rotate(${rotacion}deg)`;

        setTimeout(() => {
            const anguloFinal = (rotacion % 360) / 360 * 8;
            const premioSeleccionado = premios[Math.floor(anguloFinal)];
            mostrarPremio(premioSeleccionado);

            // Cerrar la página después de 10 segundos
            setTimeout(() => {
                window.close();
            }, 20000);
        }, 4000);
    };

    // Agregar eventos para dispositivos móviles y computadoras
    ruleta.addEventListener("click", girarRuleta);
    ruleta.addEventListener("touchstart", girarRuleta);

});
document.addEventListener("DOMContentLoaded", function () {
    const downloadCV = document.getElementById("downloadBtn");

    if (downloadCV) {
        downloadCV.addEventListener("click", function () {
            // Seleccionamos solo el contenido de la tarjeta para exportar
            const element = document.querySelector(".card");

            // Configuración para la generación del PDF
            const options = {
                margin: 0.5,
                filename: 'mi_cv.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            // Generamos y descargamos el PDF
            html2pdf().set(options).from(element).save();
        });
    }
});
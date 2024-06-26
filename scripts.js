document.addEventListener("DOMContentLoaded", function() {
    // Mensaje de bienvenida con enlace a WhatsApp
    let message = "¡Bienvenido a nuestra página web de JASÍS! Haz clic en el enlace para contactarnos por WhatsApp.";
    let whatsappLink = "https://wa.me/573214695729"; // Coloca aquí tu enlace de WhatsApp

    // Mostrar un mensaje en el centro de la página
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.color = '#fff';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';
    overlay.innerHTML = `
        <div style="text-align: center;">
            <p>${message}</p>
            <button style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; margin-top: 10px;" id="continueBtn">Continuar</button>
            <button style="padding: 10px 20px; background-color: #f44336; color: white; border: none; cursor: pointer; margin-top: 10px; margin-left: 10px;" id="cancelBtn">Cancelar</button>
        </div>
    `;
    document.body.appendChild(overlay);

    // Acción al hacer clic en el botón "Continuar"
    document.getElementById('continueBtn').addEventListener('click', function() {
        window.location.href = whatsappLink; // Redireccionar al enlace de WhatsApp al continuar
        overlay.style.display = 'none'; // Ocultar el mensaje de bienvenida
    });

    // Acción al hacer clic en el botón "Cancelar"
    document.getElementById('cancelBtn').addEventListener('click', function() {
        overlay.style.display = 'none'; // Ocultar el mensaje de bienvenida
    });
});

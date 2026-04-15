document.getElementById('btn-calcular').addEventListener('click', () => {

    const km = +document.getElementById('km').value;
    const carne = parseFloat(document.getElementById('carne').value);
    const vuelos = +document.getElementById('vuelos').value;
    const electro = +document.getElementById('electro').value;


    const total = ((km * 0.21 * 365 / 1000) + carne + (vuelos * 0.255) + (electro * 0.233 * 365 / 1000)).toFixed(2);


    const pantalla = document.getElementById('pantalla-resultado');
    const num = document.getElementById('total-ton');
    const barra = document.getElementById('barra-color');
    const msg = document.getElementById('mensaje-personalizado');
    const contenedor = document.getElementById('contenedor-clase-sandro');

    pantalla.classList.remove('d-none');
    num.textContent = total;


    contenedor.classList.remove('resultado-verde', 'resultado-amarillo', 'resultado-rojo');

    if (total < 4) {
        contenedor.classList.add('resultado-verde');
        barra.style.width = '30%';
        barra.style.backgroundColor = '#28a745';
        msg.textContent = '¡Excelente nivel! Sigue así. 🌱';
    } else if (total <= 8) {
        contenedor.classList.add('resultado-amarillo');
        barra.style.width = '60%';
        barra.style.backgroundColor = '#ffc107';
        msg.textContent = 'Estás en el promedio. ¡Puedes mejorar! ⚠️';
    } else {
        contenedor.classList.add('resultado-rojo');
        barra.style.width = '100%';
        barra.style.backgroundColor = '#dc3545';
        msg.textContent = 'Tu huella es muy alta. ¡Es momento de actuar! 🚨';
    }

    // Scroll suave al resultado
    pantalla.scrollIntoView({ behavior: 'smooth' });
});
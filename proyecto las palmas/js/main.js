document.addEventListener('DOMContentLoaded', function () {
    imagenHotelUno();             // Establece la imagen por defecto para hoteles
    imagenHotelUnoSafaris();      // Establece la imagen por defecto para hoteles en safaris
    imagenCrucerosUno();          // Establece la imagen por defecto para cruceros
    imagenTrekkingUno();          // Establece la imagen por defecto para trekkings
});

document.getElementById('hotelUno').addEventListener('click', imagenHotelUno);
document.getElementById('hotelDos').addEventListener('click', imagenHotelDos);
document.getElementById('hotelTres').addEventListener('click', imagenHoteltres);

function imagenHotelUno() {
    let image = document.getElementById('imagenHoteles');
    image.style.backgroundImage = "url(../img/hotel-estrellas-uno.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenHotelDos() {
    let image = document.getElementById('imagenHoteles');
    image.style.backgroundImage = "url(../img/hotel-estrellas-dos.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenHoteltres() {
    let image = document.getElementById('imagenHoteles');
    image.style.backgroundImage = "url(../img/hotel-estrellas-tres.jpg)";
    image.style.backgroundSize = "cover";
}


document.getElementById('hotelUnoSafaris').addEventListener('click', imagenHotelUnoSafaris);
document.getElementById('hotelDosSafaris').addEventListener('click', imagenHotelDosSafaris);
document.getElementById('hotelTresSafaris').addEventListener('click', imagenHoteltresSafaris);

function imagenHotelUnoSafaris() {
    let image = document.getElementById('imagenHotelesSafaris');
    image.style.backgroundImage = "url(../img/hotel-safari1.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenHotelDosSafaris() {
    let image = document.getElementById('imagenHotelesSafaris');
    image.style.backgroundImage = "url(../img/hotel-safari2.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenHoteltresSafaris() {
    let image = document.getElementById('imagenHotelesSafaris');
    image.style.backgroundImage = "url(../img/hotel-safari3.jpg)";
    image.style.backgroundSize = "cover";
}

document.getElementById('crucerosUno').addEventListener('click', imagenCrucerosUno);
document.getElementById('crucerosDos').addEventListener('click', imagenCrucerosDos);
document.getElementById('crucerosTres').addEventListener('click', imagenCruceroTres);

function imagenCrucerosUno() {
    let image = document.getElementById('cruceros');
    image.style.backgroundImage = "url(../img/crucero1.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenCrucerosDos() {
    let image = document.getElementById('cruceros');
    image.style.backgroundImage = "url(../img/crucero2.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenCruceroTres() {
    let image = document.getElementById('cruceros');
    image.style.backgroundImage = "url(../img/crucero3.jpg)";
    image.style.backgroundSize = "cover";
}

document.getElementById('button-trekkings1').addEventListener('click', imagenTrekkingUno);
document.getElementById('button-trekkings2').addEventListener('click', imagenTrekkingDos);
document.getElementById('button-trekkings3').addEventListener('click', imagenTrekkingTres);

function imagenTrekkingUno() {
    let image = document.getElementById('trekkings');
    image.style.backgroundImage = "url(../img/trekking1.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenTrekkingDos() {
    let image = document.getElementById('trekkings');
    image.style.backgroundImage = "url(../img/trekking2.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenTrekkingTres() {
    let image = document.getElementById('trekkings');
    image.style.backgroundImage = "url(../img/trekking3.jpg)";
    image.style.backgroundSize = "cover";
}
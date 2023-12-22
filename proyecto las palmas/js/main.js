// hoteluno.addEventListener('click', imagenHotelUno);
// hoteldos.addEventListener('click', imagenHotelDos);
// hoteltres.addEventListener('click', imagenHoteltres);

// function imagenHotelUno() {
//     let hoteluno = document.getElementById('hotelUno');
//     let image = document.getElementById('imagen-hoteles');
//     image.style.backgroundImage = "url(../img/hotel-estrellas-uno.jpg)";
//     image.style.backgroundSize = "cover";
// }

// function imagenHotelDos() {
//     let hoteldos = document.getElementById('hotelDos');
//     let image = document.getElementById('imagen-hoteles');
//     image.style.backgroundImage = "url(../img/hotel-estrellas-dos.jpg)";
//     image.style.backgroundSize = "cover";
// }
// function imagenHoteltres() {
//     let hoteltres = document.getElementById('hotelTres');
//     let image = document.getElementById('imagen-hoteles');
//     image.style.backgroundImage = "url(../img/hotel-estrellas-tres.jpg)";
//     image.style.backgroundSize = "cover";
// }

document.getElementById('hotelUno').addEventListener('click', imagenHotelUno);
document.getElementById('hotelDos').addEventListener('click', imagenHotelDos);
document.getElementById('hotelTres').addEventListener('click', imagenHoteltres);

function imagenHotelUno() {
    let image = document.getElementById('imagen-hoteles');
    image.style.backgroundImage = "url(../img/hotel-estrellas-uno.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenHotelDos() {
    let image = document.getElementById('imagen-hoteles');
    image.style.backgroundImage = "url(../img/hotel-estrellas-dos.jpg)";
    image.style.backgroundSize = "cover";
}

function imagenHoteltres() {
    let image = document.getElementById('imagen-hoteles');
    image.style.backgroundImage = "url(../img/hotel-estrellas-tres.jpg)";
    image.style.backgroundSize = "cover";
}

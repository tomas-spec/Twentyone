const usuario = localStorage.getItem('nombre');
if (usuario == null) {
    localStorage.setItem('nombre', prompt('INGRESAR NOMBRE'));
} else {
    alert('Tu nombre de usuario es ' + usuario);
}



    Toastify({

        text: "Hola, soy Leonardo, asistente virtual de Twenty-one, si necesitas ayuda escribinos",

        duration: 5000,
        style: {
            background: "linear-gradient(to right, #a531c2, rgb(7, 6, 6))",
        }

    }).showToast();
    //Para que no se siga repitiendo todo el tiempo
        Swal.fire({
            title: 'Succes!',
            text: 'Bienvenido a la mejor casa de apuestas',
            icon: 'success',
            confirmButtonText: 'Cool',

        })
        
    //CRUD: lo dijo en la clase
    Toastify({
        text: "Revisa las ofertas que tenemos",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #a531c2, rgb(7, 6, 6))",
        },
        onClick: function () { } // Callback after click
    }).showToast();


    



let partidoDestacados = document.getElementById("1er-Partido");
partidoDestacados.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});

let partidoDestacados2 = document.getElementById("2do-Partido");
partidoDestacados2.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados3 = document.getElementById("3er-Partido");
partidoDestacados3.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados4 = document.getElementById("4to-Partido");
partidoDestacados4.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados5 = document.getElementById("5to-Partido");
partidoDestacados5.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados6 = document.getElementById("6to-Partido");
partidoDestacados6.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados7 = document.getElementById("7to-Partido");
partidoDestacados7.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados8 = document.getElementById("8vo-Partido");
partidoDestacados8.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});
let partidoDestacados9 = document.getElementById("9no-Partido");
partidoDestacados9.addEventListener("click", function () {
    prompt("Escribe la cantidad apostar y el equipo elegido")
});

//Este es el codigo de la opcion de editar el numero de seguidores

let edit_followers = document.getElementById("seguidores");

edit_followers.addEventListener("click", editar_seguidores);

function editar_seguidores() {
    let followers = prompt("How many followers do you want?");
    document.getElementById("followers").textContent = followers;

    if (followers == null || followers == "") {
        document.getElementById("followers").textContent = "0";
    }
}


//Este es el codigo de la opcion de editar el numero de me gusta

let edit_likes = document.getElementById("me_gusta");

edit_likes.addEventListener("click", editar_me_gustas);

function editar_me_gustas() {
    let likes = prompt("How many likes do you want?");
    document.getElementById("likes").textContent = likes;

    if (likes == null || likes == "") {
        document.getElementById("likes").textContent = "0";
    }
}


//Este es el codigo de la opcion de editar el numero de me fotos

let edit_photos = document.getElementById("fotos");

edit_photos.addEventListener("click", editar_fotos);

function editar_fotos() {
    let photos = prompt("How many photos do you want?");
    document.getElementById("photos").textContent = photos;

    if (photos == null || photos == "") {
        document.getElementById("photos").textContent = "0";
    }
}


//Este es el codigo del lapiz que al darle click puedes editar el nombre START

let edit_name_button = document.getElementById("edit_name");

edit_name_button.addEventListener("click", editar_nombre);

function editar_nombre() {
    let nombre = prompt("What's your name?");

    document.getElementById("h3_nombre").textContent = nombre;

    if (nombre == null || nombre == "") {
        document.getElementById("h3_nombre").textContent = "Angel Jimenez";
    }
}


//Este es el codigo para cambiar la ciudad

let edit_city_button = document.getElementById("edit_city");

edit_city_button.addEventListener("click", editar_ciudad);

function editar_ciudad() {
    let ciudad = prompt("Where are you from?");

    document.getElementById("h4_ciudad").textContent = ciudad;

    if (ciudad == null || ciudad == "") {
        document.getElementById("h4_ciudad").textContent = "Santo Domingo";
    }
}
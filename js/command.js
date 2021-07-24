let validation = document.getElementById('bouton_envoi');
let civilite = document.getElementsByClassName('civilite');
let nom = document.getElementById('name');
let prenom = document.getElementById('firstname');
let nom_valid = /^[a-zA-Zéèîï][a-zéèîïçàô]+([-'\s][a-zA-Zéèîï][a-zéèîïçàô]+)?/;
let n_voie = document.getElementById('nVoie')
let n_voie_valid = /^([0-9][a-zA-Z][-\s])?/;
let voie = document.getElementById('rue');
let cp = document.getElementById('cp');
let cp_valid = /^[0-9]$/;
let ville = document.getElementById('ville');
let ville_valid = /^[a-zA-Zéèôâûë]+$/;
let mail = document.getElementById('mail');
let mail_valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;//w3Resource.com
let firstName, lastName, numero, rue, codePostal, city, email;
let erreur = document.getElementById("erreur");
let erreur_mail = document.getElementById("erreur_mail");

validation.addEventListener('click', f_valid);
function f_valid(e) {

    // validation  du nom
    if (!nom.value) {
        e.preventDefault();
        erreur.innerHTML = " Les champs surlignés sont obligatoires";
        erreur.style.color = "red";
        nom.style.background = "red";

    } else if (!nom_valid.test(nom.value)) {
        e.preventDefault();
        erreur.innerHTML = "Le format de saisie est incorrect";
        erreur.style.color = "orange";
        nom.style.background = "orange";

    } else {
        firstName = nom.value;
    }
    //validation du prenom
    if (!prenom.value) {
        e.preventDefault();
        erreur.innerHTML = " Les champs surlignés sont obligatoires";
        erreur.style.color = "red";
        prenom.style.background = "red";
    } else if (!nom_valid.test(nom.value)) {
        e.preventDefault();
        erreur.innerHTML = "Le format de saisie est incorrect";
        erreur.style.color = "orange";
        prenom.style.background = "orange";

    } else {
        lastName = prenom.value;
    }

    //validation du n° de voie
    if (!n_voie_valid.test(n_voie.value)) {
        e.preventDefault();
        erreur.innerHTML = "Le format de saisie est incorrecte";
        erreur.style.color = "orange";
        n_voie.style.background = "orange";
    } else {
        numero = n_voie.value;
    }

    //validation du code postal
    if (!cp.value) {
        e.preventDefault();
        erreur.innerHTML = "Les champs surlignés sont obligatoires";
        erreur.style.color = "red";
        cp.style.background = "red";
    } else if (cp.value.length !== 5 || isNaN(parseInt(cp.value))) {
        e.preventDefault();
        erreur.innerHTML = "Le format de saisie est incorrecte."
        erreur.style.color = "orange";
        cp.style.background = "orange";

    } else {
        codePostal = cp.value;
    }
    //validation ville
    if (!ville.value) {
        e.preventDefault();
        erreur.innerHTML = "Les champs surlignés sont obligatoires";
        erreur.style.color = "red";
        ville.style.background = "red";
    } else if (!ville_valid.test(ville.value)) {
        e.preventDefault();
        erreur.innerHTML = "le format de saisie est incorrect";
        erreur.style.color = "orange";
        ville.style.background = "orange";
    } else {
        city = codePostal + " " + ville.value;
    }
    //validation adresse mail
    if (!mail_valid.test(mail.value)) {
        e.preventDefault();
        erreur_mail.innerHTML = "L'adresse mail n'est pas valide"
        erreur_mail.style.color = "red";
        mail.style.background = "red";

    } else {
        email = mail.value;
    }
    let address = numero + " " + voie.value;
    let products = [];
    for (let i = 0; i < localStorage.length; i++) {
        products.push(localStorage.key(i));
    }
    let dataContact = {
        firstName, lastName, address, city, email, products
    }
    console.log(dataContact)
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(xhr);
        console.log(xhr.readyState)
        console.log(xhr.status)
        if (xhr.readyState == 4 && xhr.status == 200) {
            {
                document.getElementById("nom").innerHTML = "Yesssssssssssssssssss";
            }
            xhr.open("POST", 'http://localhost:3000/api/teddies/order', true);
            xhr.send(JSON.stringify(dataContact));
        }
    }






}




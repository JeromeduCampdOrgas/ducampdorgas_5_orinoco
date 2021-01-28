

/*function validateCart(){
    f_valid();

     //f_post();
   
}*/
let nom = document.getElementById('name');

 
function f_valid(){

   
    let prenom = document.getElementById('forname');
    let n_voie = document.getElementById('nVoie');
    let voie = document.getElementById('voie');
    let cp = document.getElementById('cp');
    let ville = document.getElementById('ville');
    let mail = document.getElementById('mail');

    let nom_valid = /^[a-zA-Zéèîï][a-zéèîïçàô]+([-'\s][a-zA-Zéèîï][a-zéèîïçàô]+)?/ ;
    let n_voie_valid = /^([0-9][a-zA-Z][-\s])?/;
    let cp_valid = /^[0-9]$/;
    let ville_valid = /^[a-zA-Zéèôâûë]+$/;
    let mail_valid =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;//w3Resource.com

    let firstName, lastName, numero, rue, codePostal, city, email;

    let erreur = document.getElementById("erreur");
    let erreur_mail = document.getElementById("erreur_mail");

    console.log(nom);
    nom.addEventListener('input', function(e) {
        let value = e.target.value;
        if (value) {
            isValid = true;
            console.log("true")
        } else {
            isValid = false;
            console.log("false")
        }
    });
// validation  du nom
        /*if(!nom.value){
            erreur.innerHTML = " Les champs surlignés sont obligatoires";
            erreur.style.color = "red";
            nom.style.background ="red";
            console.log("devrait retourner false");
            return false; 
        }/*else if(!nom_valid.test(nom.value)){
            erreur.innerHTML = "Le format de saisie est incorrect";
            erreur.style.color = "orange";
            nom.style.background = "orange";
             return false
        }else{

        }
//validation du prenom
    if(!prenom.value){
        erreur.innerHTML = " Les champs surlignés sont obligatoires";
        erreur.style.color = "red";
        prenom.style.background ="red";
        return false;
    }else if(!nom_valid.test(prenom.value)){
        erreur.innerHTML = "Le format de saisie est incorrect";
        erreur.style.color = "orange";
        prenom.style.background = "orange";
        return false;
    }else{

    }
    //validation du n° de voie
    if(!n_voie_valid.test(n_voie.value)){
        erreur.innerHTML = "Le format de saisie est incorrecte";
        erreur.style.color = "orange";
        n_voie.style.background= "orange";
        return false
    }else{
       numero = n_voie.value;
    }
    //validation du code postal
    if(!cp.value){
        erreur.innerHTML = "Les champs surlignés sont obligatoires";
        erreur.style.color = "red";
        cp.style.background = "red";
        return false;
    }else if(cp.value.length !==5 || !cp_valid.test(cp.value)){
        erreur.innerHTML = "Le format de saisie est incorrecte."
        erreur.style.color = "orange";
        cp.style.background = "orange";
        return false;
    }else{
       codePostal = cp.value;
    }
    //validation ville
    if(!ville.value){
        erreur.innerHTML = "Les champs surlignés sont obligatoires";
        erreur.style.color = "red";
        ville.style.background = "red";
        return false;
    }else if(!ville_valid.test(ville.value)){
        erreur.innerHTML = "le format de saisie est incorrect";
        erreur.style.color = "orange";
        ville.style.background = "orange";
        return false;
    }else{
        city = codePostal + " " + ville.value ;
    }
    //validation adresse mail
    if(!mail_valid.test(mail.value) && mail.value){
        erreur_mail.innerHTML = "L'adresse mail n'est pas valide"
        erreur_mail.style.color = "red";
        mail.style.background = "red";
        return false;
    }else {
        email = mail.value;
    }
       /* let address = numero + " " + voie.value;    
        let products = [];
        for(let i = 0;i < localStorage.length;i++){
            products.push(localStorage.key(i));
        }   
        const contact= {
                 firstName ,lastName,address,city,email
        }  
        let objetFinal = {};
            objetFinal.contact = contact;
            objetFinal.products = products;
       return   JSON.stringify(objetFinal)*/
} 

   /*const f_post =async function(){
        fetch('http://localhost:3000/api/teddies',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(objetFinal)
        })
        //console.log(JSON.parse(objetFinal));
    }
*/









    

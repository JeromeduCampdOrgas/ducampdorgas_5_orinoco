//suite au click sur le bouton de validation du formulaire de commande
async function validateCart(){
    sessionStorage.clear();//efface la response "false" de la sessionStorage
    const response = f_valid() //si le formulaire passe la validation =>
    sessionStorage.setItem('client',JSON.stringify(response))       //=> on stocke la réponse
    if(response){
        let client = sessionStorage.getItem('client');
        await fetch('http://localhost:3000/api/teddies/order',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:client
        })      
        .then(response => response.json()) //on récupère la réponse du serveur et on la transforme en json
        .then(json => sessionStorage.setItem('client',JSON.stringify(json))//on stocke la réponse du serveur
        )
        .catch(error => console.log(error))
    //Renvoi vers la page de confirmation
        window.location= "confirmation.html";
    }
}
//Vérification du formulaire en front-end
function f_valid(){
    let nom = document.getElementById('name');
     let prenom = document.getElementById('firstname');
     let n_voie = document.getElementById('nVoie');
     let voie = document.getElementById('rue');
     let cp = document.getElementById('cp');
     let ville = document.getElementById('ville');
     let mail = document.getElementById('mail');

     let nom_valid = /^[a-zA-Zéèîï][a-zéèîïçàô]+([-'\s][a-zA-Zéèîï][a-zéèîïçàô]+)?/ ;
     let n_voie_valid = /^([0-9][a-zA-Z][-\s])?/;
     let cp_valid = /[0-9]/;
     let ville_valid = /^[a-zA-Zéèôâûë]+$/;
     let mail_valid =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;//w3Resource.com
 
     let lastName,firstName,  numero, rue, codePostal, city, email;
 
     let erreur = document.getElementById("error");
     let erreur_mail = document.getElementById("erreur_mail");
     let requiredClass = document.getElementsByClassName('required');
//evènement sur les inputs à la perte du focus
     for(let elem of requiredClass){
         elem.onblur = function(){
             elem.style.background = "none";
             erreur.innerHTML = "";
         }
     }
//validation  du nom
     if(!nom.value){
         erreur.innerHTML = " Les champs surlignés sont obligatoires";
         erreur.style.color = "red";
         nom.style.background ="red";
         return false;
     }else if(!nom_valid.test(nom.value)){
         erreur.innerHTML = "Le format de saisie est incorrect";
         erreur.style.color = "orange";
         nom.style.background = "orange";
             return false;
         }else{         
             lastName = nom.value;
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
         firstName = prenom.value
     }
//validation du n° de voie
     if(!n_voie_valid.test(n_voie.value)){
         erreur.innerHTML = "Le format de saisie est incorrecte";
         erreur.style.color = "orange";
         n_voie.style.background= "orange";
         return false;
     }else{
        numero = n_voie.value;
     }
//validation de la rue
        if(!voie.value){
         erreur.innerHTML =  "Les champs surlignés sont obligatoires";
         erreur.style.color = "red";
         voie.style.background= "red";
         return false;
        }else if(!n_voie_valid.test(voie.value)){
         erreur.innerHTML = "Le format de saisie est incorrecte";
         erreur.style.color = "orange";
         voie.style.background= "orange";
         return false;
     }else{
        rue = voie.value;
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
         let address = numero + " " + voie.value;    
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
        return  objetFinal;   
 } 


   










    

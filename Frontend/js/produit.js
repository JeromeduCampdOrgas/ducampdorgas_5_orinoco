//Gestion des pluriels
function getPluriel(nb){
    return nb>1 ? "s" : "";
  }
//Récupération de l'id produit dans l'Url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idProduct = urlParams.get('id')


async function fillNounours() {
    await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
      .then((response) => response.json()) // will return info, in json format
      .then((nounours) => remplirListeNounours(nounours)) // main code here, using json info
  }
  fillNounours();
  
  
const productName = document.getElementById("productName");
const productRef = document.getElementById("productRef");
const productImg = document.getElementById("productImg");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const personnalisation = document.getElementById("personalisation"); 
let volume = document.getElementById('nombre');
let volumeTest = document.getElementById('nbCart');

  /******************************************/
  function remplirListeNounours(nounours){
      for(let elem of nounours){
          if(elem._id == idProduct){//si l'id de l'Url correspond à l'id d'un produit 
            productName.innerHTML = elem.name ;
            productRef.innerHTML = "ref: " + elem._id;
            productImg.setAttribute("src",elem.imageUrl);
            productPrice.innerHTML = elem.price;
            productDescription.innerHTML = "Description: <br>" + elem.description;              
            personnalisation.innerHTML = "Ce produit est disponible en " + elem.colors.length 
                + " couleur" + getPluriel(elem.colors.length);
            for(color of elem.colors){
                let newOption = document.createElement("option");
                newOption.setAttribute("value",color);
                newOption.innerHTML = color
                const personnalisation = document.getElementById("couleur-select");
                personnalisation.appendChild(newOption);
            }
          }
      }
      //Affiche le volume des produits déjà dans le panier au chargement de la page
      recup();
  }

  
    
  function recup(){
    //Récupération du panier
    let panier = [];

    //Récupération de la couleur sélectionnée
      let couleur = document.getElementById("couleur-select").value;  
    
      if(localStorage.getItem(idProduct)){
        panier = JSON.parse(localStorage.getItem(idProduct));
        const j = colorExists(panier,couleur);
        //Appel de la fonstion colorExists dans panier.js
        if(j !== false){
            volume.innerHTML = panier[j]['quantity'];        
        }else{
          volume.innerHTML = 0;
        }
      }
      
  
}

//Modifie le volume de ce produit dans le panier en fonction du changement de couleur
const choix = document.getElementById('couleur-select');
choix.addEventListener('change', (event) => {
recup();
});








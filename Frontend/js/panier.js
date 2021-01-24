function ajoutPanier(){
     //Récupération du nom
        let nom = document.getElementById("productName").innerHTML;
     //Récupération de la couleur sélectionnée
        let couleur = document.getElementById("couleur-select").value;
     //Récupération du prix
        let prix = document.getElementById("productPrice").textContent;
        let produit ={
            idProduct,nom,couleur,prix
        }
        let panier = [];
        let volume = document.getElementById('nombre');
        if(localStorage.length == 0){
            produit.quantity = 1;
            panier.push(produit);
            localStorage.setItem(idProduct,JSON.stringify(panier)); 
            volume.innerHTML = produit.quantity;
        }else{
            if(localStorage.getItem(idProduct)){
                panier = JSON.parse(localStorage.getItem(idProduct));
                //Récupération du ré&sulta de colorExists sous forme de variable
                let i = colorExists(panier,couleur);

                if(i !== false ){
                    //si même produit même couleur on ajoute 1 à quantity 
                        produit.quantity = panier[i]['quantity']+=1;
                    //supression de l'objet en index i
                        panier.splice(i,1);
                    //on écrit la nouvelle quantité sur la page      
                        volume.innerHTML = produit.quantity;
                    //on push le produit modifié dans le panier
                        panier.push(produit);
                    //on stocke le nouveau prosduit dans le localStorage
                        localStorage.setItem(idProduct,JSON.stringify(panier));                                  
                }else{
                    //si même produit couleur différente: ajouter nouvel élément
                        produit.idProduct = idProduct;
                        produit.nom = nom;
                        produit.couleur = couleur;
                        produit.prix = prix;
                        produit.quantity = 1;
                        volume.innerHTML = produit.quantity;
                        panier.push(produit);
                        localStorage.setItem(idProduct,JSON.stringify(panier));
                } 
            }else{
                produit.quantity = 1;
                volume.innerHTML = produit.quantity;
                panier.push(produit);
                localStorage.setItem(idProduct,JSON.stringify(panier));
            }
        } 
}
    
  function retraitPanier(){

     //Récupération de la couleur sélectionnée
        let couleur = document.getElementById("couleur-select").value;
        let volume = document.getElementById('nombre');
        if(localStorage.length == 0){
            console.log('Votre panier est vide');
        }else{
            //console.log("Votre panier n'est pas vide");
            //si le produit est dans le panier
            if(localStorage.getItem(idProduct));{
                let panier = JSON.parse(localStorage.getItem(idProduct));

                let i = colorExists(panier,couleur);

                //si la couleur du produit est dans le panier
                if(i !==false){ 
                    //console.log("Ce produit est dans votre panier, et de cette couleur");
                            if(panier[i]['quantity'] == 1){   
                                panier.splice(i,1);
                                volume.innerHTML = 0;
                                if(panier.length == 0){ 
                                    localStorage.removeItem(idProduct);
                                }else{   
                                    localStorage.setItem(idProduct,JSON.stringify(panier));
                                }
                            }else{
                                volume.innerHTML = panier[i]['quantity']-=1;
                                localStorage.setItem(idProduct,JSON.stringify(panier));
                                }
                            }
                        }    
                    } 
                 }    
                      
//teste l'existence du produit dans la couleur sélectionnée        
   
    Array.prototype.indexOfObject = function (property, value) {
        for (var i = 0, len = this.length; i < len; i++) {
            if (this[i][property] === value) return i; 
        }
        return -1;
    }   
    //utilisationn de indexOfObject dans la fonction colorExists
    function colorExists(array,color){
           if(array && array.indexOfObject("couleur", color) >=0){
            return array.indexOfObject("couleur", color);
        }else{
            return false;
        }
    }

function voirPanier(){
    for(let i = 0;i < localStorage.length;i++){
    let lsKey = localStorage.key(i);
    let panier = localStorage.getItem(lsKey);
    panier.push(panier);
    }
    
}

function viderPanier(){
    volume.innerHTML = 0;
    window.localStorage.clear();
    window.sessionStorage.clear();
}
function validationPanier(){
    let formulaire = document.getElementById('command');
    if(localStorage.length == 0){
        alert('Votre panier est vide');
    }else{
        formulaire.style.display = 'flex'
        formulaire.style.flexDirection = 'column';
    }
}
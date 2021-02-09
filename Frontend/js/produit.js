//Récupération de l'id produit dans l'Url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idProduct = urlParams.get('id');

//Requete Ajax
    fillNounours();

    function remplirListeNounours(nounours){
        const productName = document.getElementById("productName");
        const productRef = document.getElementById("productRef");
        const productImg = document.getElementById("productImg");
        const productPrice = document.getElementById("productPrice");
        const productDescription = document.getElementById("productDescription");
        const personnalisation = document.getElementById("personalisation"); 

            for(let elem of nounours){
                if(elem._id == idProduct){//si l'id de l'Url correspond à l'id d'un produit 
                    productName.innerHTML = elem.name ;
                    productRef.innerHTML = "ref: " + elem._id;
                    productImg.setAttribute("src",elem.imageUrl);
                    productPrice.innerHTML = (elem.price /100).toFixed(2) + " ";
                    productDescription.innerHTML = "Description: <br>" + elem.description;              
                    personnalisation.innerHTML = "Ce produit est disponible en " + elem.colors.length 
                        + " couleur" + getPluriel(elem.colors.length);
                    for(color of elem.colors){
                        let newOption = document.createElement("option");
                        newOption.setAttribute("value",color);
                        newOption.innerHTML = color;

                        const personnalisation = document.getElementById("couleur-select");
                        personnalisation.appendChild(newOption);
                    }
                }
            }
    //Affiche le volume des produits déjà dans le panier au chargement de la page
        recup();
    }

//Récupération du panier selon produit en cours
    function recup(){
        let panier = [];
        let volume = document.getElementById('nombre');

        //Récupération de la couleur sélectionnée
        let couleur = document.getElementById("couleur-select").value;  
    //si un produit identique est dans le panier
        if(localStorage.getItem(idProduct)){
            //on parse le localStorage avec le produit correspondant
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
    choix.addEventListener('change', function() {
    recup();
    });

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
        if( localStorage.length == 0){
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
                   
    function voirPanier(){
        if(localStorage.length == 0){
            alert("Votre panier est vide");
        }else{ 
            for(let i = 0;i < localStorage.length;i++){
            let lsKey = localStorage.key(i);
            window.location= "panier.html";
            }
        }   
    }

    function viderPanier(){
        if(localStorage.length == 0){
            alert("Votre panier est vide");
        }else{ 
        nombre.innerHTML = 0;
        window.localStorage.clear();
        window.sessionStorage.clear();
        }
    }







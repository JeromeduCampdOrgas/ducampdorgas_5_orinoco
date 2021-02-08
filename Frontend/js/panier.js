//Récupération du panier complet
    let panier = [];
    let articles = [];
//Récupération des clés du localStorage => articles(array)
    for(let i = 0;i < localStorage.length;i++){
        let lsKey = localStorage.key(i);
        articles.push(lsKey)
    }
    for(let elem of articles){
        let article = JSON.parse(localStorage.getItem(elem))
        panier.push(article);
    }

//Création du tableau récapitulatif
    function tableauRecap(){
    tbody = document.getElementById("tbody");    
    let grandTotal = 0;
    let nbArticles = 0
    for(let elem of panier){
        for(let ligne of elem){
            //Récupération des infos par produit
            let productName = ligne.nom;
            let productColor = ligne.couleur;
            let productQty = ligne.quantity;
            let productPrice = parseInt(ligne.prix);
            let productTotal = productQty * productPrice;
            
            //Création et insertion d'une ligne par article
            let ligneArticle = document.createElement('tr');
            tbody.appendChild(ligneArticle);
            //création d'une colonne par info article
            let colName = document.createElement('th');
            let colColor = document.createElement('th');
            let colQty = document.createElement('th');
            let colPrice = document.createElement('th');
            let colTotal = document.createElement('th');

            //Renseignement des infos
            colName.innerHTML = productName;
            //colRef .innerHTML = productRef;
            colColor .innerHTML = productColor;
            colQty .innerHTML = productQty;
            colPrice .innerHTML = productPrice.toFixed(2) + " €";
            colTotal.innerHTML = productTotal.toFixed(2) + " €";
            //Insertion des colonnes renseignées
            ligneArticle.appendChild(colName);
            //ligneArticle.appendChild(colRef);
            ligneArticle.appendChild(colColor);
            ligneArticle.appendChild(colQty);
            ligneArticle.appendChild(colPrice);
            ligneArticle.appendChild(colTotal); 

            grandTotal = parseInt(grandTotal) + productTotal;
            nbArticles = nbArticles  + productQty
            } 
        }  
        let totalAPayer =document.getElementById('total');
        totalAPayer.innerHTML = grandTotal.toFixed(2) + " €";
    }

    tableauRecap();

//bouton de validation du panier ouvrant le formulaire
    function validationPanier(){
        let formulaire = document.getElementById('command');
        if(localStorage.length == 0){
            alert('Votre panier est vide');
        }else{
            formulaire.style.display = 'flex'
            formulaire.style.flexDirection = 'column';
        }
    }
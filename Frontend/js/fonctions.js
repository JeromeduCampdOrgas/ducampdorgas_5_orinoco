function panierVide(){
    let lienPanier = document.getElementById('voirPanier');
    lienPanier.addEventListener('click',function(e){
        if(localStorage.length == 0){  
            e.preventDefault();
            console.log("Votre panier est vide");
            
        }
    })
}
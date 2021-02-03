//Si le panier est vide le lien vers la page est désactivé
    document.getElementById("voirPanier").onclick = function() {
            if(localStorage.length ===0){  
            return false;
         }
        } 
    



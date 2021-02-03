//Si le panier est vide le lien vers la page est désactivé
    document.getElementById("voirPanier").onclick = function() {
            if(localStorage.length ===0){  
            return false;
         }
        } 
    
//Gestion des pluriels
function getPluriel(nb){
    return nb>1 ? "s" : "";
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

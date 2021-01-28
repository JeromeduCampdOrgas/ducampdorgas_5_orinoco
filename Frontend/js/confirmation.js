//Récupération du panier
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
    
function calculTotal(){
    let prixTotal = 0;
    for(elem of panier){
        for(produit of elem){
            let volume = produit.quantity;
            let prix = produit.prix;
            let total = volume * prix
            prixTotal = parseInt(prixTotal) +  total;
        } 
    }
    document.getElementById('totalMontant').innerHTML = prixTotal + " €"
}
calculTotal();
function idCommand(){
  console.log(sessionStorage)
let order = JSON.parse(sessionStorage.getItem('client'));
document.getElementById('idCommand').innerHTML = order.orderId;
    console.log(order.orderId);  
}
idCommand();
localStorage.clear();
sessionStorage.clear();
//Appel de la fonction Ajax.js/fillNounours 
fillNounours();
//Afficher nom des nounours
function remplirListeNounours(nounours) {
    for (let elem of nounours) {
        const newProduct = document.createElement('div');
        newProduct.setAttribute('class', 'newProduct');

        const newLien = document.createElement("a");
        newLien.setAttribute("class", "lienImg");

        const newImg = document.createElement("img");
        newImg.setAttribute("class", "detailImg");

        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = elem.name;
        newImg.setAttribute("src", elem.imageUrl);
        newImg.setAttribute("class", "detailImg");
        newLien.setAttribute("href", "produit.html?id=" + elem._id);//ajout de l'id produit dans l'url de la page de destination

        const parentLien = document.getElementById("listProducts");
        parentLien.appendChild(newProduct);
        newProduct.appendChild(newLien);
        newLien.appendChild(newImg);
        newProduct.appendChild(newParagraph);
    }
}





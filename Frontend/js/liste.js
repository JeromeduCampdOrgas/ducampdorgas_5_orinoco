            async function fillNounours() {
            await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
              .then((response) => response.json()) // will return info, in json format
              .then((nounours) => remplirListeNounours(nounours)) // main code here, using json info
          }
          fillNounours();
         //Afficher nom des nounours
        function remplirListeNounours(nounours) {
            for(let elem of nounours){
                const newProduct = document.createElement('div');
                newProduct.setAttribute('class','newProduct');
                 const newLien = document.createElement("a");
                 newLien.setAttribute("class","lienImg");
                 const newImg = document.createElement("img");
                 newImg.setAttribute("class","detailImg");
                 const newParagraph = document.createElement("p");
                 newParagraph.innerHTML = elem.name;
                 newImg.setAttribute("src",elem.imageUrl);
                 newImg.setAttribute("class","detailImg");
                 newLien.setAttribute("href", "produit.html?id=" + elem._id);
                 const parentLien = document.getElementById("listProducts");
                 parentLien.appendChild(newProduct);
                 newProduct.appendChild(newLien);
                 newLien.appendChild(newImg);
                 newLien.appendChild(newParagraph);
             }
         }
        


 

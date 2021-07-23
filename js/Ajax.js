//fonction fillNounours
async function fillNounours() {
  try {
    await fetch('orinocobackend.herokuapp.com/api/teddies') // will return info, but in wrong format
      .then((response) => response.json()) // will return info, in json format
      .then((nounours) => remplirListeNounours(nounours)) // main code here, using json info
  }
  catch (error) {
    console.log("parait qu'il y a une boulette de syntaxe: " + error)
  }
}
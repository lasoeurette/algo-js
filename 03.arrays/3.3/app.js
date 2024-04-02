(() => {

    let argentDePoche = [5, 15, 10, 15];
        console.log(argentDePoche.length);
        // je crée un tableau, il contient 4 entrées.

        console.log("Tableau avec mon argent de poche mensuel : ", argentDePoche)
    let argentDePocheDouble = [];
        // je crée la varioble pour stocker les éléments doublés

        for ( let i = 0; i < argentDePoche.length; i++){ 
            argentDePocheDouble.push(argentDePoche[i] * 2);
        }    
        /* je crée une boucle initialisée à 0, je vérifie la condition, j'incrémente 1 à chaque boucle, parcours chaque élémént du
         tableau initial et je double les éléments */

        console.log("tableau de rêve avec mon argent de poche doublé : " , argentDePocheDouble)

})();

(() => {

let argentDePocheInitial = [5, 15, 10, 15];


let argentDouble = argentDePocheInitial.map(element => element * 2);
    // l'utilisation de map() permet de mutliplier tous les éléments par 2.

console.log("Tableau avec les éléments doublés (utilisant map()) :", argentDouble);

})();
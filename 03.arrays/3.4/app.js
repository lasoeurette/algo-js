(() => {
let argentDePoche = [ 5, 10, 15, 5];
 // Je définis l'argent de poche
 
let minimum = argentDePoche[0];
let maximum = argentDePoche[0];
// Je déclare les variables minimum et maximum 

for(let element of argentDePoche) { 
    if (element < minimum) { 
        minimum = element;
    }
    if ( element > maximum) { 
        maximum = element;
    }
} // à chaque itération je compare l'élément actuel avec minimum et maximum et il l'a met à jour si nécéssaire

    console.log("La somme minimale est de : ", minimum);
    console.log("La somme maximale est de : ", maximum);
        // j'affiche les sommes.
})();
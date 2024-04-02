(() => {
    let day = prompt("Choisis un chiffre de 1 à 7");

      if (day === "1")  {
           console.log("Lundi"); 
        } else if (day === "2") {
        console.log("Mardi"); }
         else if (day === "3") {
        console.log("Mercredi");
    } else if (day === "4") {
        console.log("Jeudi");
    } else if (day === "5") {
        console.log("Vendredi");
    } else if (day === "6") {
        console.log("Samedi");
    } else if (day === "7") {
        console.log("Dimanche");
    } else {
        console.log("Veuillez choisir un chiffre entre 1 et 7.")
    }
})();
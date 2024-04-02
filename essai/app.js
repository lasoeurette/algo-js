(() => {
  let tableau = [112, 222, 333, 544, 615];
    let somme = 0;
      for ( let i = 0; i < tableau.length; i++){
          somme += tableau[i];
       }
       const moyenne = somme / tableau.length;
       console.log("La moyenne du tableau est :", moyenne);   
    })();
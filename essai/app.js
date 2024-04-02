(() => {
  
    let tableau = [12, 22, 333, 544, 15];
    let somme = 0;
      for ( let i = 0; i < tableau.length; i++){
          somme += tableau[i];
       }
       const moyenne = somme / tableau.length;
       console.log("La moyenne du tableau est :", moyenne);
      
    })();
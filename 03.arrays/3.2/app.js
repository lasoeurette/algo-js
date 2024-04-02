(() => {
  let tableau = [1, 2, 3, 4, 5];
  let somme = 0;
    for ( let i = 0; i < tableau.length; i++){
        somme += tableau[i];
     }
     const moyenne = somme / tableau.length;
     console.log("La moyenne du tableau est :", moyenne);
    })();

    (() => {   
    let tableau1 = [100, 101, 102];
    let somme1 = 0;
      for ( let j = 0; j < tableau1.length; j++){
          somme1 += tableau1[j];
       }
       const moyenne1 = somme1 / tableau1.length;
       console.log("La moyenne du tableau est :", moyenne1);
  })();

  
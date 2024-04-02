(() => {
    let sum = 0; 

    let n = parseInt(prompt("Entrez un nombre :"));
    
    if (!isNaN(n) && n > 0) { 
        for (let i = 0; i < n; i++) { 
            let number = parseInt(prompt("Entrez un nouveau nombre :")); 
            if (!isNaN(number)) { 
                sum += number; // 
            } else {
                alert("Veuillez entrer un nombre valide."); 
                i--; //
            }
        }
        alert("La somme des nombres est : " + sum); 
        alert("Veuillez entrer un nombre valide et positif."); 
    }
    
})();
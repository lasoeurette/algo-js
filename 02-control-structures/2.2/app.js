(() => {
    let min = prompt ('Enter a minimum number');
    let max = prompt ('Enter a maximal number');
    let current = prompt ('Enter a current number');

    if ( current > min && current < max) { 
         console.log("GG !");  
            }
            else if ( min < max || max > min) 
            {
                console.log("You're dumb, leave the site");}
        
    })();
(() => {
 let number = prompt("Enter your favorite number");

 while (number !== 42) {
    console.log (number);
    console.log("Etes-vous sûr ? ");
    number = prompt ("Enter your favorite number");
}
})();
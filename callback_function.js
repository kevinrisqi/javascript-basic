const orderCoffe = callback => {
    let coffe = null;
    
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffe = "Kopi sudah jadi!";
        callback(coffe)
    }, 3000);

}

orderCoffe(coffe => {
    console.log(coffe)
})

// console.log(coffe)
// const stock = {
//     coffeBeans: 250,
//     water: 100
// }

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if (stock.coffeBeans >= 16 && stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi")
//         } else {
//             reject("Stok tidak cukup")
//         }
//     })
// }

// const handleSuccess = resolvedValue => {
//     console.log(resolvedValue)
// }

// const handleFailure = rejectedReason => {
//     console.log(rejectedReason)
// }

// checkStock().then(handleSuccess).catch(handleFailure)


const state = {
    stock: {
        coffeBeans: 250,
        water: 1000,
    },
    isCoffeMachineBusy: false
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        if (!state.isCoffeMachineBusy) {
            resolve("Mesin kopi siap digunakan.")
        } else {
            reject("Mesin kopi masih sibuk")
        }
    })
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi")
            } else {
                reject("Stok tidak cukup!")
            }
        }, 1500);
    })
}

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!")
        }, 2000);
    })
}

const grindCoffeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Biji kopi sudah siap!")
        }, 1000);
    })
}

const brewCoffe = () => {
    console.log("Membuat kopi...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2500);
    })
}

function makeEspresso(){
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            const promises = [boilWater(), grindCoffeBeans()];

            return Promise.all(promises);
        })
        .then((value) => {
            console.log(value);
            return brewCoffe();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeMachineBusy = false
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason);
            state.isCoffeMachineBusy = false
        });
}

makeEspresso()
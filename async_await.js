// const getCoffe = () => {
//     return new Promise((resolve, reject) => {
//         const seeds = 4;
//         setTimeout(() => {
//             if (seeds >= 100) {
//                 resolve("Kopi didapatkan!")
//             } else {
//                 reject("Biji kopi habis!")
//             }
//         }, 1000);
//     })
// }

// async function makeCoffe() {
//     try {
//         const coffe = await getCoffe();
//         console.log(coffe)
//     } catch (error) {
//         console.log(error)
//     }
// }

// makeCoffe()

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

async function makeEspresso() {
    try {
        const status = await checkAvailability();
        console.log(status)
        const stok = await checkStock();
        console.log(stok)
        await Promise.all([boilWater(), grindCoffeBeans()]);
        const coffe = await brewCoffe();
        console.log(coffe);
    } catch (error) {
        console.log(error);
    }
}

makeEspresso()
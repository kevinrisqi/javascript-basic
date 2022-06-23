
//TODO: Find array to get total of value 

// function main() {
//     var array = [2, 2, 4, 2, 2, 7];

//     let result;

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i != j && array[i] + array[j] == 8) {
//                 result = `Array ke ${i}: ${array[i]} | Array ke ${j} : ${array[j]}`;
//             }
//         }

//     }
//     return result;

// }

// console.log(main())

//TODO: Pangkat Bilangan

// let bilangan = 0.5;
// let bilPangkat = -2;
// let temp = 1

// function pangkat() {
//     if (bilPangkat == 0) {
//         return temp = 0
//     }

//     if (bilPangkat > 0) {
//         for (let i = 0; i < bilPangkat; i++) {
//             temp = temp * bilangan;
//             // console.log(temp)
//         }
//         console.log('bilangan pangkat +')
//     } else {
//         let temp1 = 1;
//         for (let i = 0; i < Math.abs(bilPangkat); i++) {
//             temp1 = temp1 * bilangan;
//             // console.log(temp)
//         }
//         temp = 1 / temp1;
//         console.log(`Hasil minus: 1 / ${temp1}`) 
//     }

//     return temp;
// }

// console.log(`Result Math Pow: ${Math.pow(0.5, -2)}`)

// // main();
// console.log(pangkat())

// let summer = ['June', 'July', 'August'];
// let index = summer.indexOf('June');
// console.log(index);

// const key = {
//     'a': 0,
//     'b': 1,
//     'c': 2,
//     'd': 3,
//     'e': 4,
//     'f': 5,
//     'g': 6,
//     'h': 7,
//     'i': 8,
//     'j': 9,
//     'k': 10,
//     'l': 11,
//     'm': 12,
//     'n': 13,
//     'o': 14,
//     'p': 15,
//     'q': 16,
//     'r': 17,
//     's': 18,
//     't': 19,
//     'u': 20,
//     'v': 21,
//     'w': 22,
//     'x': 23,
//     'y': 24,
//     'z': 25,
// }

// function typingTest() {

//     let keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]];

//     let keyCode = [];
//     let keyPress = [];
//     let keyTime = [];

//     let objKeyPress = [{}];

//     //Keycode
//     for (let i = 0; i < keyTimes.length; i++) {
//         for (let j = 0; j < 1; j++) {
//             keyCode.push(keyTimes[i][j]);
//         }
//     }

//     console.log(`KeyCode : ${keyCode}`)

//     let element = {}, list = [];

//     //KeyPress
//     for (let i = 0; i < keyTimes.length; i++) {
//         keyPress.push(keyTimes[i][1]);
//         element.keyPress = keyTimes[i][1];
//         list.push({element})
//         // Object.assign(objKeyPress, {keyPress: keyTimes[i][1]})
//         // objKeyPress.key = keyTimes[i][1];
//     }

//     // Object.assign(objKeyPress, {keyPress: 2})

//     console.log(`KeyPress : ${keyPress}`)
//     console.log(`KeyPress Object : ${JSON.stringify(list)}`)

//     // Calculating time to get KeyTime
//     for (let i = 0; i < keyPress.length; i++) {
//         if (i == 0) {
//             keyTime.push(keyPress[i] - 0);
//         } else {
//             keyTime.push(keyPress[i] - keyPress[i - 1]);
//         }
//     }

//     // Get longest time
//     let dataLong = Math.max(...keyTime);

//     // Get index
//     let index = keyTime.indexOf(Math.max(...keyTime));

//     // Find Object to compare value

//     let value = keyTimes[index][0]

//     let result = Object.keys(key).find(item => key[item] === value);

//     return `The leter is longest to pressed is ${result}`;

// }

// console.log(typingTest())


// let username = '';
// let password = '';

// if (username == "" && password == "") {
//     console.log('username atau password kosong')
// }else if(username == ""){
//     console.log('username kosong')
// }
// else {
//     console.log('username atau password salah')
// }


// function alphabetPosition(text) {
//     let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     let arrOfStrings = splitString(text.toLowerCase());
//     console.log(arrOfStrings)
//     let objectOfValues = {};
//
//     for(let i = 0; i < arrOfStrings.length; i++) {
//         let stringsValues = strtingValue(arrOfStrings[i], alphabet);
//         objectOfValues[arrOfStrings[i]] = stringsValues;
//
//     }
//     const objectOfValuesKeys = Object.keys(objectOfValues);
//     let max = 0;
//     for(let key of objectOfValuesKeys) {
//         if(objectOfValues[key] > max) {
//             max = objectOfValues[key];
//         }
//     }
//     for(let key of objectOfValuesKeys) {
//         if(objectOfValues[key] === max) {
//             console.log(key)
//         }
//     }
//     console.log(max)
//
//
//
// }
// alphabetPosition("salutare ce faci teodor");
//
// //
//
// function splitString(string) {
//     return string.split(" ");
// }
//
// function strtingValue(text, alphabet) {
//     let counter = 0;
//     for (let i = 0; i < text.length; i++) {
//         let idx = alphabet.indexOf(text[i]);
//         if (idx === -1) {
//             continue
//         } else {
//             counter += idx + 1;
//         }
//     }
//     return counter;
// }


// const arr = [1, 2, 3, "patru", "cinci" ,6 , 7];
//
// const reduceOnArr = arr.reduce((acc, currentVal) => acc - currentVal, 0);
// console.log(reduceOnArr)

const reactCandidates = [{name: "Teo", experience: 2}, {name: "Razvan", experience: 5}, {name: "Vlad", experience: 3}]

const candidates = reactCandidates.reduce((acc, currentVal) => {

    let experience = currentVal.experience;
    if(!acc[experience]) {
        acc.push(experience)
    }
    return acc
    // let exp = currentVal.experience;
    // if(!acc[exp]) {
    //     acc[exp] = 1
    // } else {
    //     acc[exp] += 1;
    // }
    //
    // return acc + currentVal.experience


},[]);
console.log(candidates)

// const candidates = reactCandidates.reduce((acc, currVal) => {
//     let experienceValue = currVal.experience;
//     if(acc.experience === undefined || acc.experience < experienceValue ) {
//         return currVal;
//     } else {
//         return acc;
//     };
//
// },{})
//
// console.log(candidates)


// const newArr = [{name: "Claudiu"}, {name: "Teodor"}, {name: "Tudor"}];
// // [{name: "Claudiu", nameLength: 12}, {name: "Teodor", nameLength: 5}, {name: "Tudor", nameLength: 7}];
//
//
// const reduceOfNewArr = newArr.reduce((acc , currVal) => {
//     let obj = {};
//     let name = currVal.name;
//     let nameLength = (currVal.name).length;
//     if(!acc[name]) {
//         obj.name = name;
//         obj.nameLength = nameLength;
//         acc.push(obj)
//     }
//     return acc
//     }, []);
// console.log(reduceOfNewArr)




// Sa se extraga dintr-un array numerele care se repeta de cel putin jumatatea lungimi array-ului

const arr = [1, 2, 2, 2, 3, 4, 5, 2, 5, 2, 2];

function extractRepetitiveNumbers(arrElements) {
    const obj = {};
    for (let objValue of arrElements) {
        if (!obj[objValue]) {
            obj[objValue] = 1;
        } else {
            obj[objValue] += 1;
        }
    }
    console.log(obj)
    const objKeys = Object.keys(obj);
    for (let key of objKeys) {
        if (obj[key] >= arrElements.length / 2) {
            console.log(obj[key]);
        }
    }

}

extractRepetitiveNumbers(arr)


//Sa se extraga dintr-un array doar elementele de tip number

function extractNumbers(arrOfElements) {
    return arrOfElements.filter((item) => typeof item === "number");
}

// console.log(extractNumbers([1, 2, "a", "b", ]));
// console.log(extractNumbers([1, "a", "b", 0,15 ]));
// console.log(extractNumbers([1, 2, "aaasf", "123", 123 ]));

/*  Itereaza peste un arry, iar pentru elementele de tip number afiseaza daca sunt pare
sau impare, iar pentru string-uri afiseaza this is a string.
*/
const arr2 = [1, 2, 3, 5, "6", "asdf", 9, 10, true];

function showTypeofElements(arr) {
    arr.map((e) => {
        switch (typeof e) {
            case "number":
                console.log(`this is ${e % 2 === 0 ? `${e} an even` : `${e} an odd`}  number`);
                break;
            case "string":
                console.log(`this is ${e} a string`);
                break;
            default:
                console.log("this is an invalid argument");
        }
    })
}

showTypeofElements(arr2);

// un calculator care primeste ca parametru un string de numere si returneaza valoarea lor

function calculator(string) {
    console.log(eval(string))
}
calculator("1+2+3+5*2")

function arrayExecution(arr1, arr2, string) {
    switch (string) {
        case "union":
           console.log([
               ...arr1.filter((item) => arr2.indexOf(item) === -1), //concateneaza elementele distincte ale celor doua filtre
               ...arr2.filter((item) => arr1.indexOf(item) === -1)
           ]);
           break;
        case "intersect":
            return arr1.filter((e) => arr2.includes(e) && isPrime(e)); // functia isPrime este appelata pentru a returna numerele pare
            break;
        case "distinct":
            return arr1.filter((item) => arr2.indexOf(item) === -1);
            break;
        default: console.log("ceva nu este in regula")
    }
}

arrayExecution([34, 35, 45, 48, 49, 55, 55], [48, 55], "union");
console.log(arrayExecution([7, 9, 34, 35, 45, 47, 48, 49, 53], [7, 9, 47, 48, 49, 53, 55], "intersect"));
console.log(arrayExecution([1, 2, 3, 4, 5, 8], [1, 3, 4], "distinct"));

//functie care verifica daca elementele sunt prime
function isPrime(item) {
        for(let i = 2; i <= Math.sqrt(item); i++) {
            if (item % i === 0) {
                return false;
            }
        }
        return  true
}



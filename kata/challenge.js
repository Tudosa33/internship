// 'use strict';

// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;
//
// function teamsScore(dolphinsTeam, koalaTeam) {
//     const teams = 100;
//     if (dolphinsTeam > koalaTeam && dolphinsTeam >= 100) {
//         console.log('Dolphins wins 😍');
//     } else if (dolphinsTeam < koalaTeam && koalaTeam >= 100) {
//         console.log("Koala wins");
//     } else if (dolphinsTeam === koalaTeam && dolphinsTeam >= 100 && koalaTeam >= 100) {
//         console.log("there is a draw")
//     } else {
//         console.log("No one wins ")
//     }
// }
// teamsScore(dolphins, koalas);


// const day = "sunday";
// if (day === "monday") {
//     console.log("I have a course which i have to atend")
// } else if (day === "tuesday") {
//     console.log("more stufs to do")
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("fun time")
// } else if (day === "friday") {
//     const p = document.createElement("p");
//     p.textContent = "Allmost the weeknd 😍"
//     document.body.appendChild(p);
// } else if (day === "saturday" || day === "sunday") {
//     console.log("YEAH IS WEEKEND")
// } else {
//     console.log("there is not a valid day")
// }


// const age = 20;
//
// age >= 18 ? console.log("you can drink booze") : console.log("you are to young take this water");
//
// const drink = age >= 18 ? `Wine ${'🍷'}` : "water 🧊";
// console.log(drink)


//code challenge 4

// function tipCalculator(bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     return `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
//     // return bill >= 50 && bill <= 300 ? `The bill was ${bill}, the tip was ${bill * 15 / 100}, and the total value ${bill + bill * 15 / 100}`
//     //     : `The bill was ${bill}, the tip was ${bill * 20 / 100}, and the total value ${bill + bill * 20 / 100}`
// }
//
// console.log(tipCalculator(430));

//
// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')
//

function sliceFruits(fruit) {
    return fruit * 4;
}

// function fruitProcessor(apples, oranges) {
//     const slicedApples = sliceFruits(apples);
//     const slicedOranges = sliceFruits(oranges);
//     const juice = `Juice with ${slicedApples} pieces of apple and ${slicedOranges} pieces of orange`;
//     return juice;
// }
//
// console.log(fruitProcessor(2, 3))

// const calcAge = function (year) {
//     return 2021 - year;
// }
//
// const yearsUntillRetirement = (birthYear) => {
//     const age = calcAge(birthYear);
//     const retirementTime = 65 - age;
//
//     if (retirementTime > 0) {
//         return `you still have ${retirementTime} untill retirement`;
//     } else {
//         return -1;
//     }
// }
// console.log(yearsUntillRetirement(1998));
// console.log(yearsUntillRetirement(1950));

//JavaScript Fundamentals – Part 2 code challange 2

const dolph = [85, 54, 41];
const koala = [23, 34, 27];

function calcAverage(data) {
    const calcData = data.reduce((accumulator, curentValue) => accumulator + curentValue);
    return calcData / data.length;
}

function checkWinner(list1, list2) {
    const avgDolphines = calcAverage(list1);
    const avgKoalas = calcAverage(list2)
    if (avgDolphines >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphines} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphines) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphines})`);
    } else {
        console.log("nobody wins")
    }

}

checkWinner(dolph, koala);

const friends = ['Micheal', 'Steven', 'Peter']
console.log(friends[friends.length - 1])

const lista = [1, 1, 2, 3, 4];

function something(param) {
    return param.reduce((previousValue, currentValue) => previousValue + currentValue)
}

console.log(something(lista));

console.log(lista.includes(1))

//Coding Challenge #2
// const bills = [122, 555, 44];
// const tips = [];
//
// const calcTip = function (values) {
//     return values.map((item) => item >= 50 && item <= 300 ? tips.push(item * 0.15) : tips.push(item * 0.2));
// }
// calcTip(bills)
//
// const total = [bills[0] + tips[0]]
// console.log(bills)
// console.log(tips)
// console.log(total)



// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills);
// console.log(tips);
// console.log(total);


const jonas = {firstName: "Jonas", lastName: "Bucur", job:"teacher", age:23, friends: ["Michael", "mark", "robert"]};
const name = 'Name';

console.log(jonas["first" + name])
console.log(jonas["last" + name])

// const interestedIn = prompt('What do you want to know about jonas? Choose between age, firstName, lastName, job and age');
//
// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else
//     console.log('Wrong! you have to choose between age, firstName, lastName, job and age ')

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)

const jonas2 = {firstName: "Jonas", lastName: "Bucur", job:"teacher", friends: ["Michael", "mark", "robert"], birthYear: 1991,
hasDriversLicense: true,
calculateAge: function () {
   this.age = 2037 - this.birthYear;
   return this.age;
},
getSummary: function () {
    return `${this.firstName} is a ${this.calculateAge()}-years old ${this.job} and he has
${this.hasDriversLicense ? "a" : "no"} driver's license.`
}
};
console.log(jonas2.calculateAge())
console.log(jonas2.age)
console.log(jonas2.age)

console.log(jonas2.getSummary())

// code challenge 3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = Math.round(this.mass / this.height ** 2);
        return this.bmi;
    },

};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi = Math.round(this.mass / this.height ** 2);
        return this.bmi;
    },
};

console.log(mark.calcBmi())
console.log(john.calcBmi())

console.log(`${mark.bmi > john.bmi ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} BMI (${john.bmi})`
    : `${john.fullName} BMI (${john.bmi}) is higher than  ${mark.fullName} BMI (${mark.bmi})`}`);


// for

const arr = [1, 2, "aaasf", "123", 123, true, [1, 2, 3, 5] ]
const empty = [];

for (let i = 0; i < arr.length; i++) {
    // empty.push(typeof arr[i])
    empty[i] = typeof arr[i]
}
console.log(empty)


// for(let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }

// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`Exercise ${exercise}`)
//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`rep ${rep}`)
//     }
// }

let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     if(dice === 6) console.log(`Loop is about to end`)
// }

// challenge 4 tip calculator
function calcTip(param) {
    return param >= 50 && param <= 300 ? param * 0.15 : param * 0.2;
}
const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips4 = [];
const total4 = [];

for(let i = 0; i < bills4.length; i++) {
    const tip = calcTip(bills4[i]);
    tips4.push(tip);
    total4.push(bills4[i] + tip)
}
console.log(bills4, tips4, total4)

const calcAverage2 = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(calcAverage2(total4));
console.log(`mediaaaaa bacsisurilor ${calcAverage2(tips4)}`);

//thermometer

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== "number") continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }

    return max - min;

}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude)

//merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max2 = temps[0];
    let min2 = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== "number") continue;
        if(curTemp > max2) max2 = curTemp;
        if(curTemp < min2) min2 = curTemp;
    }

    return max2 - min2;

}
const amplitudeNew = calcTempAmplitudeNew([3,5,1], [9,0,5]);

// const measureKelvin = function () {
//     const measurement = {
//         type: "temp",
//         unit: "celsius",
//         value: Number(prompt("Degrees celsius"))
//     };
//     console.log(measurement)
//     console.table(measurement)
//
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }
//
// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let acc = '';
    for(let i = 0; i < arr.length; i++) {
        acc += `${arr[i]}C in ${i + 1} days... `; // adauga string dupa string intr-un string mai mare

    }
    console.log("..." + acc)
}
printForecast(data1);
printForecast(data2)
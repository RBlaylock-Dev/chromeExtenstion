let person = {
    name: "Robert",
    age: 31,
    country: "USA"
}

function logData() {
    return person.name + " is " + person.age + " years old and lives in the " + person.country
}

logData()


let age = 15

if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age <27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}


let age = 15;

if (age < 6) {
    console.log("free");
} else if (age >= 6 && age <= 17) {
    console.log("child discount");
} else if (age >= 18 && age <= 26) {
    console.log("student discount");
} else if (age >= 27 && age <= 66) {
    console.log("full price");
} else {
    console.log("senior citizen discount");
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// the unshift method add new elements to the beginnings of the array
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.
// The push() method adds new items to the end of an array.
//The push() method changes the length of the array.
//The push() method returns the new length.
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")

let dayOfMonth = 13;
// let weekday = "Friday";
// if ("Friday" && 13) {
//     console.log(":hankey:")
// }
// or
// if (weekday === "Friday" && dayOfMonth=== 13) {
//     console.log(":hankey:")
// }
// let hands = ["rock", "paper", "scissor"];
// let randomIndex = Math.floor(Math.random() * hands.length);
// let randomHand = hands[randomIndex];
// console.log(randomHand);
// or
// function getHand() {
//     let randomIndex = Math.floor(Math.random() * hands.length);
//     return hands[randomIndex]
// }
// console.log(getHand)
// let color = ["white", "blue", "black", "green", "red"]
// function colorRandom() {
//     let randomIndex = Math.floor(Math.random() * color.length);
//     return color[randomIndex]
// }
// console.log(colorRandom())
// let piece = ["blue", "red", "red", "blue", "red"]
// let blueShelf = document.getElementById("blue-shelf")
// let redShelf = document.getElementById("red-shelf")
// function sortPieces() {
//     blueShelf.textContent = '';
//     redShelf.textContent = '';
//     for (let i = 0; i < piece.length; i++) {
//         if (piece[i] === "blue") {
//             blueShelf.textContent += piece[i] + ' ';
//         } else if (piece[i] === "red") {
//             redShelf.textContent += piece[i] + ' ';
//         }
//     }
// }
// sortPieces()

let boxBtn = document.getElementById("box")

boxBtn.addEventListener(click, function()) {
    console.log("I want to open the box!")
}


function saveLead() {
    console.log("Button clicked!")
}

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button Clicked!")
})

let myLeads = []
let inputEl
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"
shippingCost = 15
shippingTime = "7-14 days"
const fullPrice = basePrice - discount + shippingCost
console.log("Total cost: " + fullPrice + ". It will arive in " + shippingTime)

const recipient = "James"
const sender = "Robert"

const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

console.log(email)


localStorage.setItem("myName", "Robert")
localStorage.getItem("myName")
localStorage.clear()


const welcomeEl = document.getElementById("welcome-el")
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser() {
   welcomeEl.textContent = greeting + ", Per Harald Borgen"
}
greetUser("Howdy")

const welcomeEl = document.getElementById("welcome-el")
// parameters
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}. ${name}, ${emoji}`
}

function add(num1, num2) {
    return num1 + num2
 }

 //arguments are on the outside of a function or outside of the scope
 console.log( add(3, 4)  )
 console.log( add(9, 102) )

greetUser("Howdy", "James")

function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 2, 5])
console.log(firstCard)


//Setting the stage
let player = "Per"
let opponent = "Nick"
let game = "AmazingFighter"
const points = 0
const hasWon = false

//Playing the game
points += 100
hasWon = true

//anouncing the winner
if (hasWon) {
    console.log(player + " got " + points + " points and won the " + game + " game!")
} else {
    console.log("The winner is " + opponent + "! " + player + " lost the game")
}

// Go through all the variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes


const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
}


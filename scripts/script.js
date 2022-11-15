// input = prompt("Welcome! What is your Name?")
// greet(input)

function greet(string){
    console.log(`Hello ${string}`)
}

// let greet = function (string) {
//     console.log(`Hello ${string}`);
// };


// let greet = userName => {
//     console.log(`Hello ${userName}`)
// }

// greet("Louie");

// greet()

// function greet(string, time = 'Day'){
//     console.log(`Good ${time} ${string}`)
// }

// greet("Louie","Night");

// function greet(string, time = 'Day'){
//     return(`Good ${time} ${string}`)
// }

// const result = greet("Louie","Night");
// console.log(result)

const unorderedListElement = document.querySelector(".shopping")
function populateList(list)
{
for (let i = 0; i < list.length; i++) {
    console.log(list[i])
    const listItemElement = document.createElement("li");
    listItemElement.textContent = list[i];
    unorderedListElement.appendChild(listItemElement);
};
};
let shoppingList = ["cheese","bread","green pepper"];
populateList(shoppingList);
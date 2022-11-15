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
    // console.log(list[i])
    const listItemElement = document.createElement("li");
    listItemElement.textContent = list[i];
    unorderedListElement.appendChild(listItemElement);
};
};
let shoppingList = ["cheese","bread","green pepper","green potato"];
populateList(shoppingList);

function changeListStyle ()
{
    unorderedListElement.classList.add("squareList");
    unorderedListElement.classList.remove("circleList");

    // unorderedListElement.classList.replace("circleList", "squareList")
}
changeListStyle()

function updateImage()
{
    const imageElement = document.querySelector("#shoppingCart")
    // console.log(imageElement)
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png"
    imageElement.width = 100;
    imageElement.height=100;
    imageElement.alt = "shopping cart icon"
}   

updateImage()

function colorTextToGreen(){
    const textElement = document.querySelectorAll(".shopping li");
    console.log(textElement);
    for (let i = 0; i < textElement.length; i++) 
    {
    //  console.log(textElement[i]);   
        if (textElement[i].textContent.includes("green")){
            textElement[i].classList.add("greenText");
            // textElement.color = "greentext"
        }
    };
}
colorTextToGreen();
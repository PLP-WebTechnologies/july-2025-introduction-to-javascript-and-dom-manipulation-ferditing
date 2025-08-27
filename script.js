// part 1 :Basics
let userName = "Ferdinand Tingisha";
let age = 23;

// Conditional

if (age >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}

// part 2 : functions
// function one greetUser
function greetUser(userName) {
    console.log("Hello, " + userName + "!");
}

// function two calculator
function calculateSum(a, b) {
    return a + b;
}

console.log("Greeting user:");
greetUser(userName);
console.log("6 + 4 = " + calculateSum(6, 4));

// part 3 : loops
// loop 1: for loop
for (let session = 1; session <= 3; session++){
    console.log("We have three sessions a day")
    console.log("Session " + session + ":")
}

// loop 2: while loop
let count = 5;
while (count > 0){
    console.log("While loop count down:", count);
    count--;
}

// part 4 : DOM
// 1: change text on button click
document.getElementById("greetBtn").addEventListener("click", ()=>{
    document.getElementById("greeting").textContent = "Hello, " + userName + "!";
});

// 2: insert loop result into the page
document.getElementById("loopBtn").addEventListener("click", () =>{
    let result = "";
    for (let i= 1; i<= 5; i++){
        result += i + " ";
    }
    document.getElementById("loopResult").textContent = result;
});
// 3: Toggle text visibility
document.getElementById("toggleBtn").addEventListener("click", () => {
    let text = document.getElementById("toggleText");
    text.style.display = (text.style.display === "none") ? "block" : "none";
});
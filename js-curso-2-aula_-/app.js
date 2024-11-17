let listNumbersAlreadyUsed = [];
let secretNumber = randonSecretNumber();
let tryes = 1;

// let title = document.querySelector("h1");
// title.innerHTML = "Secret number game";

// let task = document.querySelector("p");
// task.innerHTML = "Choose a number between 1 and 100:";

function showUserTask (tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, "US English Female", {rate:1.2});
}
function showInitial (){
    showUserTask("h1", "The Secret number game!!!");
    showUserTask("p", "Discover the secret, choose a number between 1 and 100:");
}
showInitial();

console.log(secretNumber);
function randonSecretNumber() {
    return parseInt(Math.random() * 100 + 1);
}

function verifyTry (){
    let userTry = document.querySelector("input").value;
    if (userTry == secretNumber) {
        let msgUser = tryes > 1 ? "tryes" : "try";
        let msgUserTryes = `with ${tryes} ${msgUser}!!!`;
        document.getElementById("reiniciar").removeAttribute("disabled");

        showUserTask("h1", "WINNER");
        showUserTask("p", `You ROCK ${msgUserTryes}!!!`);
    } else {
        if (userTry < secretNumber){
        showUserTask("p", "Sorry, the secret number is bigger... try again");
    } else {
        showUserTask("p", "Sorry, the secret number is smaller... try again");
    } tryes++;
}
}

function clearField(){
    userTry = document.querySelector("input");
    userTry.value = "";
}

function rebootGame() {
    secretNumber = randonSecretNumber();
    console.log(secretNumber);
    clearField();
    tryes = 1;
    showInitial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
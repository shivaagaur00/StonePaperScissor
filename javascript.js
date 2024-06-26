let user=0;
let comp=0;
const choices=document.querySelectorAll(".sps");
function getcomp(){
    const choice=["stone","paper","scissors"];
    const randomchoice=choice[Math.floor(Math.random()*choice.length)];
    return randomchoice;
}
function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    } else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "user";
    } else {
        return "computer";
    }
}
function update(winner) {
    if (winner === "user") {
        user++;
        document.getElementById("number_you").innerText = user;
    } else if (winner === "computer") {
        comp++;
        document.getElementById("number_comp").innerText = comp;
    }
    if(user==comp){
        document.getElementById("win").innerText="Draw";
    }
    else if(user>comp){
        document.getElementById("win").innerText="user win";
    }
    else{ 
        document.getElementById("win").innerText="computer win";
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const user=choice.getAttribute("id");
        const computer=getcomp();
        const winner=getWinner(user,computer);
        update(winner);
    })
})
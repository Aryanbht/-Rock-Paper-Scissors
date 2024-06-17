console.log('hello world ');


let x = Math.random();

console.log(x);

document.getElementsByClassName("rock")[0].addEventListener("click",() => {
    if (x<=0.33) {
        document.getElementsByClassName("win")[0].innerHTML = "Draw"
    }else if(x>=0.33 && x<=0.66){
            document.getElementsByClassName("win")[0].innerHTML = "You Lose"
    }else if(x>=0.66){
        document.getElementsByClassName("win")[0].innerHTML = "You Win"
    }else{
            document.getElementsByClassName("win")[0].innerHTML = "Some Unknown Error Occured"
    }



    if (x<=0.33) {
        document.getElementsByClassName("display")[0].innerHTML = "Computer : Rock"
    }else if(x>=0.33 && x<=0.66){
            document.getElementsByClassName("display")[0].innerHTML = "Computer : Paper"
    }else if(x>=0.66){
        document.getElementsByClassName("display")[0].innerHTML = "Computer : Scissors"
    }else{
            document.getElementsByClassName("display")[0].innerHTML = "Some Unknown Error Occured"
    }
    


    
}
)
document.getElementsByClassName("paper")[0].addEventListener("click",() => {
    if (x<=0.33) {
        document.getElementsByClassName("win")[0].innerHTML = "You Win"
    }else if(x>=0.33 && x<=0.66){
            document.getElementsByClassName("win")[0].innerHTML = "Draw"
    }else if(x>=0.66){
        document.getElementsByClassName("win")[0].innerHTML = "You Lose"
    }else{
            document.getElementsByClassName("win")[0].innerHTML = "Some Unknown Error Occured"
    }



    if (x<=0.33) {
        document.getElementsByClassName("display")[0].innerHTML = "Computer : Rock"
    }else if(x>=0.33 && x<=0.66){
            document.getElementsByClassName("display")[0].innerHTML = "Computer : Paper"
    }else if(x>=0.66){
        document.getElementsByClassName("display")[0].innerHTML = "Computer : Scissors"
    }else{
            document.getElementsByClassName("display")[0].innerHTML = "Some Unknown Error Occured"
    }

    
}
)
document.getElementsByClassName("sci")[0].addEventListener("click",() => {
    if (x<=0.33) {
        document.getElementsByClassName("win")[0].innerHTML = "You Lose"
    }else if(x>=0.33 && x<=0.66){
            document.getElementsByClassName("win")[0].innerHTML = "You Win"
    }else if(x>=0.66){
        document.getElementsByClassName("win")[0].innerHTML = "Draw"
    }else{
            document.getElementsByClassName("win")[0].innerHTML = "Some Unknown Error Occured"
    }



    if (x<=0.33) {
        document.getElementsByClassName("display")[0].innerHTML = "Computer : Rock"
    }else if(x>=0.33 && x<=0.66){
            document.getElementsByClassName("display")[0].innerHTML = "Computer : Paper"
    }else if(x>=0.66){
        document.getElementsByClassName("display")[0].innerHTML = "Computer : Scissors"
    }else{
            document.getElementsByClassName("display")[0].innerHTML = "Some Unknown Error Occured"
    } 
}
)

document.getElementById("btn").addEventListener("click",()=>{
    window.location.reload();
})







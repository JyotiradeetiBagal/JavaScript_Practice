//print all even numbers from 1 to 100
/*for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}*/

//create a game number and ask to enter right game number

let game_num = 25;
let user_num = prompt("Guess the game number: ");

while(user_num != game_num){
    user_num=prompt("You entered wrong number, Guess again:");
}
console.log("Congradulations you entered right game number !");
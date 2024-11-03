// I need to keep score of how many wins for each player//
 let playerWins = 0
 let cpuWins = 0
document.getElementById("playerScore").innerHTML = `${playerWins}`
  document.getElementById("computerScore").innerHTML = `${cpuWins}`
let moves = ["rock", "paper", "scissor"]
// I need to get player ones moves//
function getPlayerMove (){
    let playerMove = document.getElementById("userinput").value
    return playerMove
}
// I need to get computers moves//
function getComputerMove (){
   
    var randomIndex = Math.floor(Math.random() * moves.length)
    var computerMove = moves[randomIndex]
    return computerMove
}
// I need to calculate if player one wins//
// I need to calculate if computer wins//
function getWinner(playerOne, computer){
//   Based on the rules of the game I used if/else conditions to determine whether you win, lose, or draw for each round //
    if(playerOne == computer){
        alert(`Its A Draw! computerMove: ${computer}`)
        }
   else if (playerOne == "rock" && computer == "scissor") {
       alert(`You Win! computerMove: ${computer}`)
       playerWins++
    }
    
    
   else if (playerOne == "paper" && computer == "rock") {
         alert(`You Win! computerMove: ${computer}`)
         playerWins++
         
    } 
    
    
   else if (playerOne == "scissor" && computer == "paper") {
       alert(`You Win! computerMove: ${computer}`)
       playerWins++
    } 
   
    else{
        alert(`You Lose! computerMove: ${computer}`)
        cpuWins++
    }
    
}

// I need to reset the game//
function reset(){
    // Gave the reset function a score tracker to reset the the game //
 playerWins = 0
  cpuWins = 0
 document.getElementById("playerScore").innerHTML = `${playerWins}`
  document.getElementById("computerScore").innerHTML = `${cpuWins}`
}
// I need to keep score of how many wins for each player//

// I need to be able to play a round//
function playRound(){ 
    let usersMoves = getPlayerMove().toLowerCase()
    let computersMoves = getComputerMove().toLowerCase()
    
    // does the list of moves contain the users move//
    if(!moves.includes(usersMoves)){
    alert("invalid move please choose rock, paper, or scissor")
    return
 }
//    I need to determine the winner using the score tracker
    getWinner(usersMoves, computersMoves)
  document.getElementById("playerScore").innerHTML = `${playerWins}`
  document.getElementById("computerScore").innerHTML = `${cpuWins}`
 
}


let Btn = document.getElementById("button");
let output = document.getElementById("output");
let number = [Math.floor(Math.random() * 100)];


Btn.addEventListener('click', function(){
  let input = document.getElementById("guessField").value;
  if (input == number){
    output.innerHTML = "You guessed right, it was" + (number)
    output.style.color = "#68A7AD"
  }
  
  else if (input < number){
    output.innerHTML = "You guessed too low!"
  };
   
  if (input > number){
    output.innerHTML = "You guessed too high!"
  }
  
   else if (isNaN(input)){
     output.innerHTML = "That's not a number!"
  }

});

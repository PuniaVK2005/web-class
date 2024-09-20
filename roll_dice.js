

let rolldice1 = document.getElementById('btn1');
rolldice1.addEventListener("click", ()=>{
     num1 = Math.floor(Math.random()*6)+1;
     console.log(num1);
  document.getElementById('dice1').value = num1;
  
});

let rolldice2 = document.getElementById('btn2');
rolldice2.addEventListener("click" , ()=>{
     num2 = Math.floor(Math.random()*6)+1;
console.log(num2);
    document.getElementById('dice2').value = num2;
    
});

function winnerdecision(){
    if(num1>num2){
        alert("user1 is winner:");
    }
    
    else if(num1 == num2){
        alert(" It is tie:")
    }
    
    else{
        alert("user2 is winner:")
    }
}
let winner = document.getElementById('winner_final');

winner.addEventListener("click" , ()=>{

   winnerdecision();
});


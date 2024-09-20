

let selectCards = document.getElementById('selectcards');
selectCards.addEventListener("click" , ()=>{
    let card1 = parseInt(document.getElementById('card1').value);
    let card2 = parseInt(document.getElementById('card2').value);
    let card3 = parseInt(document.getElementById('card3').value);
    let card4 = parseInt(document.getElementById('card4').value);
    let card5 = parseInt(document.getElementById('card5').value);

    if(isNaN(card1) || isNaN(card2) || isNaN(card3) || isNaN(card4) ||isNaN(card5)){
        alert("plese enter card values betwwen 1 to 13");
        return;
    }

    let cards = [card1,card2,card3,card4,card5];
let sum = 0;
    for(let i =0;i<cards.length;i++){
        sum = sum+cards[i];
    }

    document.getElementById('sumValue').textContent  = sum;
})

let sortcards = document.getElementById('sortcards');
sortcards.addEventListener("click" ,()=>{
    let card1 = parseInt(document.getElementById('card1').value);
    let card2 = parseInt(document.getElementById('card2').value);
    let card3 = parseInt(document.getElementById('card3').value);
    let card4 = parseInt(document.getElementById('card4').value);
    let card5 = parseInt(document.getElementById('card5').value);

    if(isNaN(card1) || isNaN(card2) || isNaN(card3) || isNaN(card4) ||isNaN(card5)){
        alert("plese enter card values betwwen 1 to 13");
        return;
    }

    let cards = [card1,card2,card3,card4,card5];

cards.sort((a, b) => a - b);
    alert("Sorted Cards: " + cards.join(", "));
  
});
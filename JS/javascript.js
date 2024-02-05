let BTNFinDeTour = document.querySelectorAll('.FinDeTour');
let PionsJoueurA = document.getElementById('PionsJoueurA');
let PionsJoueurB = document.getElementById('PionsJoueurB');
let id = 'soldat';
let numberA = 0;
let numberB = 0;
let joueurA = 'joueurA';
let joueurB = 'joueurB';
let FinDeTourJABoolean = false;
let FinDeTourJBBoolean = true;
let unitJB = randomWithFixedSum(2400, 15);
let unitJA = randomWithFixedSum(2400, 15);
let scoreA = 0;
let scoreB = 0;

/*==========drag and drop========*/
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
/*===FIN====drag and drop===FIN===*/




BTNFinDeTour.forEach(FinDeTour => { addEventListener('click', ecouteQuelJoueur(FinDeTour))
});
function ecouteQuelJoueur(FinDeTour){
  FinDeTour.addEventListener('click', () => creerUniter(FinDeTour));
}

function creerUniter(FinDeTour){
  if(FinDeTour.classList.contains('JA') && FinDeTourJABoolean == false){
    Create(PionsJoueurB ,unitJB)
    FinDeTourJABoolean = true;
    FinDeTourJBBoolean = false;
  }
  if(FinDeTour.classList.contains('JB') && FinDeTourJBBoolean == false){
    Create(PionsJoueurA ,unitJA)
    FinDeTourJBBoolean = true;
  }
  if(FinDeTourJBBoolean == true && FinDeTourJABoolean == true){
  resolutionDuTour()
  }
}


function resolutionDuTour(){
    let Ligne = document.querySelectorAll('.Ligne');

    // let attaqueC1 = parseInt(document.getElementById('div1').children[0]);
    // let attaqueC2 = parseInt(document.getElementById('div2').children[0]);
    // let attaqueC3 = parseInt(document.getElementById('div3').children[0]);
    // let attaqueC4 = parseInt(document.getElementById('div4').children[0]);
    // let attaqueC5 = parseInt(document.getElementById('div5').children[0]);
    // let attaqueC6 = parseInt(document.getElementById('div6').children[0]);
    // let attaqueC7 = parseInt(document.getElementById('div7').children[0]);
    // let attaqueC8 = parseInt(document.getElementById('div8').children[0]);
    // resultat1 = attaqueC1 - attaqueC2;
    // resultat2 = attaqueC3 - attaqueC4;
    // resultat3 = attaqueC5 - attaqueC6;
    // resultat4 = attaqueC7 - attaqueC8;
    if(resultat <= 0){
      document.getElementById('scoreA').innerText = resultat + scoreA ;
    }else if (resultat >= 0) {
      document.getElementById('scoreB').innerText = resultat + scoreB;
    }
    FinDeTourJABoolean = false;
}

let number = 0;
Create(PionsJoueurA,unitJA)
function Create(PionsJoueur,unit){
  if (number<30) {
    for(i=0;i<3;i++){
      let poids = unit.shift();
      initialisationDesClass(PionsJoueur,number, poids);
      number++;
    } 
  }
}

function initialisationDesClass(PionsJoueur,number, poids){
  PionsJoueur.innerHTML += `<div id="${id}${number}" class="unite " draggable="true" ondragstart="drag(event)"><p>${poids}</p></div>`;
}

/*===========random number with sum fixed============*/
function randomWithFixedSum(sum, n) {
  //Generate an array of N random numbers using Math.random(), and calculate their    sum (randomSum);
  const arr = [];
  let randomSum = 0;
  
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
    randomSum += arr[i];
  }

//Scale each of the random numbers proportionally so that their sum becomes the desired sum. You can do this by multipling them by sum/randomSum, and then rounding the result. 
  let prevSum = 0;
  for (let i = 0; i < n - 1; i++) {
    arr[i] = Math.round(arr[i] * sum / randomSum);
    prevSum += arr[i];
  }
  //Sometimes the rounded numbers don't add up to the sum. In order to prevent this, instead of scaling the last element, set it to the difference between the sum and the sum of all previous elements (prevSum). 
  arr[n - 1] = sum - prevSum;

  return arr;
}
/*====FIN====random number with sum fixed=====FIN====*/

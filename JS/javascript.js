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
let rejoue = document.getElementById('rejoue');
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


let Ligne = document.querySelectorAll('.Ligne');
function resolutionDuTour(){
  if (Ligne[0].hasChildNodes() === true && Ligne[4].hasChildNodes() === true) {
    let resultat1 = Ligne[0].firstChild.innerText - Ligne[4].firstChild.innerText;
    if(resultat1<0){
      Ligne[0].firstChild.remove();
    }else{
      Ligne[4].firstChild.remove();    
    }
    CalculeResultat(resultat1);
    parseInt(resultat1)
  }
   
  if (Ligne[1].hasChildNodes() === true && Ligne[5].hasChildNodes() === true) {
    let resultat1 = Ligne[1].firstChild.innerText - Ligne[5].firstChild.innerText;
    if(resultat1<0){
      Ligne[1].firstChild.remove();
      }else{
      Ligne[5].firstChild.remove();    
      }
    CalculeResultat(resultat1);
  }

    
  if (Ligne[2].hasChildNodes() === true && Ligne[6].hasChildNodes() === true) {
    let resultat1 = Ligne[2].firstChild.innerText - Ligne[6].firstChild.innerText;
    if(resultat1<0){
      Ligne[2].firstChild.remove();
      }else{
      Ligne[6].firstChild.remove();    
      }
    CalculeResultat(resultat1);

    }

   
  if (Ligne[3].hasChildNodes() === true && Ligne[7].hasChildNodes() === true) {
      let resultat1 = Ligne[3].firstChild.innerText - Ligne[7].firstChild.innerText;
      if(resultat1<0){
        Ligne[3].firstChild.remove();
        }else{
        Ligne[7].firstChild.remove();    
      }
      CalculeResultat(resultat1);  
    }
    FinDeTourJABoolean = false;
    CompteTour();
}


function CalculeResultat(resultat){
  if(resultat > 0){
       scoreA = resultat + scoreA;
       document.getElementById('scoreA').textContent = scoreA;
     }else if (resultat < 0) {
       scoreB = resultat + scoreB;
       document.getElementById('scoreB').textContent = scoreB * -1;
     }
}

let compteTour = document.getElementById('CompteTour');
let icomptetour = 0;
function CompteTour(){
  
  if(icomptetour < 5){
    compteTour.innerHTML += "<div class='tour'></div>";
    icomptetour++;
  }else{
    FinDeTourJABoolean = true;
    FinDeTourJBBoolean = true;
  }
}
compteTour.addEventListener('click',NewGame);
function NewGame(){
  for (let index = 0; index < Ligne.length; index++) {
    Ligne[index].every(Ligne[index].childNodes.remove);
  }
  number = 0;
  FinDeTourJABoolean = false;
  FinDeTourJBBoolean = true;
  scoreA = 0;
  scoreB = 0;
  document.getElementById('scoreA').textContent = scoreA;
  document.getElementById('scoreB').textContent = scoreB;
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

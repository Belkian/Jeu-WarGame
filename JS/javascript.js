let BTNFinDeTour = document.querySelectorAll('.FinDeTour');
let PionsJoueurA = document.getElementById('PionsJoueurA');
let PionsJoueurB = document.getElementById('PionsJoueurB');
let id = 'soldat';
let number = 1;
let poidsMaxJoueurA = 2400;
let poidsMaxJoueurB = 2400;
let joueurA = 'joueurA';
let joueurB = 'joueurB';
let FinDeTourBoolean = true;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("block", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("block");
  ev.target.appendChild(document.getElementById(data));
}





//Fonction aléatoire donne un chiffre entre 60 est 220
 
function creationDeLaValeurDeUnite(e){
  return Math.floor(Math.random()*e);
}


BTNFinDeTour.forEach(FinDeTour => { addEventListener('click', ecouteQuelJoueur(FinDeTour))
});
function ecouteQuelJoueur(FinDeTour){
    FinDeTour.addEventListener('click', () => creerUniter(FinDeTour));
}

function creerUniter(FinDeTour){
  if(FinDeTour.classList.contains('JA')){
    Create(PionsJoueurB, joueurB)
  }
  if(FinDeTour.classList.contains('JB')){
    Create(PionsJoueurA, joueurA)

  }
}



let Valeur = 0;
function verifPoidsJoueur(poidsMax){
  Valeur = Valeur - poidsMax;
  console.log(Valeur);
}

function Create(PionsJoueur){
  for(i=0;i<15;i++){
    number ++;
    poids = equilibre(250)+60;
    initialisationDesClass(PionsJoueur,number, poids);
  } 
}

function initialisationDesClass(PionsJoueur,number, poids){
  PionsJoueur.innerHTML += `<div id="${id}${number}" class="unite" draggable="true" ondragstart="drag(event)"><p>${poids}</p></div>`;
}

function equilibre(e){
  valueRandom =  Math.floor(Math.random()*e);
  Valeur = Valeur + valueRandom;
  if(Valeur < 200){
    console.log(valueRandom)
    return valueRandom
  }else{
    console.log(Valeur)
    return Valeur
  }

}

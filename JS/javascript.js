let BTNFinDeTour = document.querySelectorAll('.FinDeTour');
let PionsJoueurA = document.getElementById('PionsJoueurA');
let PionsJoueurB = document.getElementById('PionsJoueurB');
let id = 'soldat';
let number = 1;
let poids = 2400;
let joueurA = 'joueurA';
let joueurB = 'joueurB';

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




/*
  Fonction aléatoire donne un chiffre entre 40 est 400
 
function creationDeLaValeurDeUnite(e){
  return Math.floor(Math.random()*e);
}
console.log(creationDeLaValeurDeUnite(360)+40)
*/

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

function Create(PionsJoueur, joueur){
  id = PionsJoueur;
  for(i=0;i<3;i++){
      console.log('ca marche');
      let creationDeUnite = new unites(id,poids,joueur)
      creationDeUnite.initialisationDesClass();
    } 
}


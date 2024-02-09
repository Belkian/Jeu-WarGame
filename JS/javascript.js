import LigneDePlacement from "./LigneDePlacement.js";
import player from "./player.js";
import tableauPion from "./tableauPion.js";
//  import Resultat from "./Resultat.js";
let tableauJoueur = []
tableauJoueur.push(new player('clem'));
tableauJoueur.push(new player('Bob'));

let tableauLigneDePlacement = [];
tableauLigneDePlacement.push(new LigneDePlacement())
tableauLigneDePlacement.push(new LigneDePlacement())
tableauLigneDePlacement.push(new LigneDePlacement())
tableauLigneDePlacement.push(new LigneDePlacement())

let bourse1 = new tableauPion();

// let rejoue = document.getElementById('rejoue');
// let FinDeTourJABoolean = false;
// let FinDeTourJBBoolean = true;
// let JA = document.getElementsByClassName('JA')[0];
// let JB = document.getElementsByClassName('JB')[0];
// JA.style.zIndex = 1;
// let joueur1 = new player('player1');
// let joueur2 = new player('player2');

// let tableauPion1 = new tableauPion();
// let tableauPion2 = new tableauPion();

// let pion1 = new Unit(joueur1,tableauPion1);

// let BTNFinDeTour = document.querySelectorAll('.FinDeTour'); 
//  BTNFinDeTour.forEach(FinDeTour => { addEventListener('click', ecouteQuelJoueur(FinDeTour))
//  });
//  function ecouteQuelJoueur(FinDeTour){
//    FinDeTour.addEventListener('click', () => FinDuTour(FinDeTour));
//  }



//  function FinDuTour(FinDeTour){
//    if(FinDeTour.classList.contains('JA') && FinDeTourJABoolean == false){
//      JB.style.zIndex = 1;
//      JA.style.zIndex = 0;
//      pion1 = new Unit(joueur1,tableauPion1);
//      FinDeTourJABoolean = true;
//      FinDeTourJBBoolean = false;
//    }

//    if(FinDeTour.classList.contains('JB') && FinDeTourJBBoolean == false){
//      pion2 = new Unit(joueur2,tableauPion2);
//      FinDeTourJBBoolean = true;
//    }

//    if(FinDeTourJBBoolean == true && FinDeTourJABoolean == true && icomptetour < 5){    
//      JB.style.zIndex = 0;
//      JA.style.zIndex = 1;
//      resolutionDuTour()
//    }
//  }
 
/**
 Résolution du fin du tour 
 **/
// let Ligne = document.querySelectorAll('.Ligne');
// function resolutionDuTour(){
//   if (Ligne[0].hasChildNodes() === true && Ligne[4].hasChildNodes() === true) {
//     let resultat1 = Ligne[0].firstChild.innerText - Ligne[4].firstChild.innerText;
//     if(resultat1<0){
//       Ligne[0].firstChild.remove();
//     }else{
//       Ligne[4].firstChild.remove();    
//     }
//     CalculeResultat(resultat1);
//   }
   
//   if (Ligne[1].hasChildNodes() === true && Ligne[5].hasChildNodes() === true) {
//     let resultat1 = Ligne[1].firstChild.innerText - Ligne[5].firstChild.innerText;
//     if(resultat1<0){
//       Ligne[1].firstChild.remove();
//       }else{
//       Ligne[5].firstChild.remove();
//       }
//     CalculeResultat(resultat1);
//   }

//   if (Ligne[2].hasChildNodes() === true && Ligne[6].hasChildNodes() === true) {
//     let resultat1 = Ligne[2].firstChild.innerText - Ligne[6].firstChild.innerText;
//     if(resultat1<0){
//       Ligne[2].firstChild.remove();
//       }else{
//       Ligne[6].firstChild.remove();    
//       }
//     CalculeResultat(resultat1);
//     }

//   if (Ligne[3].hasChildNodes() === true && Ligne[7].hasChildNodes() === true) {
//       let resultat1 = Ligne[3].firstChild.innerText - Ligne[7].firstChild.innerText;
//       if(resultat1<0){
//         Ligne[3].firstChild.remove();
//         }else{
//         Ligne[7].firstChild.remove();    
//       }
//       CalculeResultat(resultat1);  
//     }
//     FinDeTourJABoolean = false;
//     CompteTour();
// }
/**
 FIN Résolution du fin du tour 
 **/



// calcule le resultat et ajoute le score au nouveau score 

// function CalculeResultat(resultat){
//   if(resultat > 0){
//        scoreA = resultat + scoreA;
//        document.getElementById('scoreA').textContent = scoreA;
//      }else if (resultat < 0) {
//        scoreB = resultat + scoreB;
//        document.getElementById('scoreB').textContent = scoreB * -1;
//      }
// }

// let compteTour = document.getElementById('CompteTour');
// let icomptetour = 0;
// function CompteTour(){
//   if(icomptetour < 5){
//     compteTour.innerHTML += "<div class='tour'></div>";
//     icomptetour++;
//   }else{
//     FinDeTourJABoolean = true;
//     FinDeTourJBBoolean = true;
//   }
//}


// création d'une nouvelle partie
// compteTour.addEventListener('click',NewGame);
// function NewGame(){
//   for (let index = 0; index < Ligne.length; index++) {
//     Ligne[index].every(Ligne[index].childNodes.remove);
//   }
//   number = 0;
//   FinDeTourJABoolean = false;
//   FinDeTourJBBoolean = true;
//   scoreA = 0;
//   scoreB = 0;
//   document.getElementById('scoreA').textContent = scoreA;
//   document.getElementById('scoreB').textContent = scoreB;
// }
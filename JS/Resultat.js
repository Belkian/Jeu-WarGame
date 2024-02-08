export default class Resultat{
    #scoreA = 0;
    #scoreB = 0;
    constructor(){

    }
    CalculeResultat(resultat){
        if(resultat > 0){
            scoreA = resultat + scoreA;
            document.getElementById('scoreA').textContent = scoreA;
        }else if (resultat < 0) {
            scoreB = resultat + scoreB;
            document.getElementById('scoreB').textContent = scoreB * -1;
        }
    }
}
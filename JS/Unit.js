export default class Unit{
    constructor(bourse,unite){
        this.Create(bourse,unite);
    }

    Create(bourse,unite){
            let poids;
            bourse = document.getElementsByClassName('bourse');
            for (let index = 0; index < 3; index++) {
                poids = unite.unit.shift();
                let PionDuJoueur = document.createElement('div')
                PionDuJoueur.classList.add('unite')
                bourse.appendChild('PionDuJoueur')
            }
            
    }
}
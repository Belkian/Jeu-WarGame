class Unit{
    constructor(PionsJoueur,unite){
        this.Create(PionsJoueur,unite);
    }
    Create(PionsJoueur,unite){
            let poids;
            PionsJoueur = document.getElementById('player1');
            for (let index = 0; index < 3; index++) {
                poids = unite.unit.shift();
                PionsJoueur.innerHTML += `<div id="soldatfzeafazef" class="unite " draggable="true" ondragstart="drag(event)">${poids}</div>`;
            }
    }
}
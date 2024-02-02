class unites extends Armee{
    
    constructor(id,poids,joueur){
        super(id,poids,joueur);

    }
    initialisationDesClass(){
        let pion = document.getElementById(this.id);
       pion.innerHTML +=  `<div id="${this.id}" class="unite" draggable="true" ondragstart="drag(event)"></div>`;
    }
}

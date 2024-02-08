export default class LigneDePlacement{
    #id
    constructor(){
        this.#id = this.IdAleatoire();
        this.CreationDeChaqueLigne();
    }
    
    get id(){
        return document.querySelectorAll('.couloir');
    }

    set id(id){
    return this.#id = id;
    }

    //Methode
    CreationDeChaqueLigne(){
        let plateau = document.getElementById('plateau');
        let Colonne = document.createElement('div');
        Colonne.classList.add('Colonne')

        let couloirHaut = document.createElement('div')
        couloirHaut.classList.add('couloir')

        let couloirBas = document.createElement('div')
        couloirBas.classList.add('couloir')

        plateau.appendChild(Colonne)
        Colonne.appendChild(couloirHaut)
        Colonne.appendChild(couloirBas)
    }
    IdAleatoire(){
        return Math.floor(Math.random()*10000000000)
    }

}   
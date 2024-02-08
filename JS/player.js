export default class player{
    #joueur
    #id
    constructor(joueur){
        this.#joueur = joueur;
        this.#id = this.IdAleatoire();
        this.NomDesJoueur();
    }

    get joueur(){
        return document.querySelector(this.id)
    }

    set joueur(joueur){
        return this.#joueur = joueur;
    }

    NomDesJoueur(){
        let tableauScore = document.querySelector('#tableauDesScores');
        let Joueur = document.createElement('div');
        Joueur.classList.add('.joueur')
        Joueur.style.height = 50+'px';
        Joueur.style.width = 100+'px';
        Joueur.style.textAlign = 'center';
        Joueur.style.backgroundColor = 'darkblue';
        
        tableauScore.appendChild(Joueur)
        
        let para = document.createElement('p');
        Joueur.appendChild(para)
        para.textContent = this.#joueur;
    }
    
    IdAleatoire(){
        return Math.floor(Math.random()*10000000000)
    }
}
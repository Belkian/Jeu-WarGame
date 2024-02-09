export default class tableauPion {
    #unites
    constructor() {
        this.#unites = this.ShiftValeurDansUnPion();
    }
    /*===========random number with sum fixed============*/
    get unites() {
        return this.#unites;
    }


    #randomWithFixedSum(sum, n) {
        //Generate an array of N random numbers using Math.random(), and calculate their sum (randomSum);
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

    ShiftValeurDansUnPion() {
        let tbs = this.#randomWithFixedSum(2400, 15);
        for (let index = 0; index < 15; index++) {
            let BourseDuJoueur = document.querySelector('#player');
            let PionDuJoueur = document.createElement('div')
            let para = document.createElement('p')
            para.textContent = tbs.shift();
            PionDuJoueur.classList.add('unite')
            BourseDuJoueur.appendChild(PionDuJoueur)
            PionDuJoueur.appendChild(para)

        }
    }
}
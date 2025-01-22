import Case from './case.js';
import { create2DArray } from './util.js';

export default class Grille
{
    constructor(largeur, hauteur)
    {
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.cases = [[]];
        this.initialiserCases(hauteur);
    }

    initialiserCases(hauteur)
    {
        this.tabCase = create2DArray(hauteur);
        for(let i = 0; i < hauteur; i++)
        {
            const div = document.createElement('div');
            div.className = 'row';
            document.getElementById('grille').appendChild(div);
            for(let j = 0; j < this.largeur; j++)
            {
                const c = new Case(Math.floor(Math.random() * Case.urls_img_case_basic.length), i, j);
                this.cases.push(c);
                div.appendChild(c.img);
            }
        }
    }

    showCase()
    {
        let caseDivs = document.querySelectorAll("#grille div");
        caseDivs.forEach((div, index) =>
        {
            let ligne = Math.floor(index / this.nbLignes);
            let colonne = index % this.nbColonnes;
            console.log(
              "On remplit le div index=" + index + " l=" + ligne + " col=" + colonne
            );

            let img = this.cases[ligne][colonne].img;
            img.onclick = (evt) =>
            { 
                let img_clique = evt.target;
                let case_selectionnee = this.getCaseFromImg(img_clique);
                
                alert(case_selectionnee.ligne + ' ' + case_selectionnee.colonne);
            }
        });

    }

    getCaseFromImg(img)
    {
        let [l,c] = Case.getLigneColonneFromImg(img);
        return this.getCaseFromLigneColonne(l, c);

    }
    getCaseFromLigneColonne(ligne, colonne)
    {
        this.cases[ligne][colonne];
    }


}




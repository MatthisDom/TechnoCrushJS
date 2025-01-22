export default class Case 
{
    static urls_img_case_basic = 
    [
        "ressources/media/img/cases/electrical.png",
        "ressources/media/img/cases/micro.png",
        "ressources/media/img/cases/mouse.png",
        "ressources/media/img/cases/ssd.png",
        "ressources/media/img/cases/video.png",
    ]

    constructor(type,ligne,colonne)
    {
        this.type = type;
        this.ligne = ligne;
        this.colonne = colonne;
        this.img = document.createElement('img');
        this.img.setAttribute('draggable', 'true');
        this.img.className = 'case';
        this.img.src = Case.urls_img_case_basic[type];
        this.img.width = 50;
        this.img.height = 50;
        this.img.dataset.ligne = ligne;
        this.img.dataset.colonne = colonne;
    }

    selectionnerCase(case_selectionnee)
    {
        case_selectionnee.classList.add('selectionnee');
    }

    static getLigneColonneFromImg(img)
    {
        return [img.dataset.ligne, img.dataset.colonne];
    }
}
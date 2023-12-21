//déclaration de variables
var ascii = 65;
var nbLettreJouee = 0;
var partieActive = true;

//création des boutons avec lettres
for (let i = 0; i < 26; i++) {
    //création d'une div contenant les lettres de l'alphabet en incrémentant
    var lettre = String.fromCharCode(ascii);
    var newLettre = document.createElement('div');
    newLettre.setAttribute('id', ascii);
    newLettre.setAttribute('class', 'boutonLettre');
    newLettre.textContent = lettre;
    document.getElementById('lettresAlphabet').appendChild(newLettre);
    
    document.getElementById(ascii).addEventListener('click', function(){
        comparer(tMotSecret, this.id);
    });
    document.getElementById(ascii).addEventListener('click', lettreCliquee);
    ascii++;
}

//créer une fonction qui affiche la valeur de la lettre cliquée
function lettreCliquee() {
    if(partieActive){
        sessionStorage.setItem('lettreJouee' + nbLettreJouee, this.innerHTML);
    }

    //affichage évolutif
    if (score == 1 && partieActive) {
        document.getElementById('echafaud').setAttribute('src', 'img/p1.gif');
        document.body.style.backgroundColor = "rgb(255, 200, 0)";
    } else if (score == 2 && partieActive) {
        document.getElementById('echafaud').setAttribute('src', 'img/p2.gif');
        document.body.style.backgroundColor = "rgb(255, 175, 0)";
    } else if (score == 3 && partieActive) {
        document.getElementById('echafaud').setAttribute('src', 'img/p3.gif');
        document.body.style.backgroundColor = "rgb(255, 120, 0)";
    } else if (score == 4 && partieActive) {
        document.getElementById('echafaud').setAttribute('src', 'img/p4.gif');
        document.body.style.backgroundColor = "rgb(255, 100, 0)";
    } else if (score == 5 && partieActive) {
        document.getElementById('echafaud').setAttribute('src', 'img/p5.gif');
        document.body.style.backgroundColor = "rgb(255, 50, 0)";
    } else if (score == 6 && partieActive) {
        document.getElementById('echafaud').setAttribute('src', 'img/p6.gif');
        document.body.style.backgroundColor = "rgb(255, 0, 0)";
        partieActive = false;
        document.getElementById('motSolution').textContent = "le mot était : " + tMotSecret.join('');
        document.getElementById('solution').style.display = 'inline-block';
        alert("c'est perdu...");
    }

    if(partieActive){
        document.getElementById('infoDico').style.display = 'none';
        document.getElementById('infosJeu').style.display = 'inline-block';
        document.getElementById('lettresJouees').textContent += " "+sessionStorage.getItem('lettreJouee'+nbLettreJouee);
        document.getElementById('tours').textContent = 6 - score;
        nbLettreJouee++;
    }
}
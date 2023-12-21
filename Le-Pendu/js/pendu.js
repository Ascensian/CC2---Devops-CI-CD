//déclaration variables
var motSecret = document.getElementById('motMystere');
var tMotSecret = [];
var tMotCache = [];
var score = 0;
var btnExplications = document.getElementById('explications');
var btnNewGame = document.getElementById('newGame');

//valeur aléatoire dans le tableau dico
var indiceMotDico = parseInt(Math.random() * 1600 + 1);

//abonnements
btnNewGame.addEventListener('click', startNewGame);
btnExplications.addEventListener('click', afficherRegles);

startNewGame();

//enregistrer le mot secret et le mot cache en Session Storage
sessionStorage.setItem('motSecret', indiceMotDico);

//afficher mot à trouver

/**
 * Il crée un mot aléatoire à partir du dictionnaire.
 */
function motAleatoire (){
    tMotSecret = dictionnaire[indiceMotDico].split('');
    tMotCache = [];
    for (let i in tMotSecret) {
        if (i == 0) {
            tMotCache[0] = tMotSecret[0];
        } else if (i == tMotSecret.length - 1) {
            tMotCache[tMotSecret.length - 1] = tMotSecret[tMotSecret.length - 1];
        } else if (tMotSecret[i] == '-') {
            tMotCache[i] = '-';
        } else if (tMotSecret[i] == ' ') {
            tMotCache[i] = ' ';
        } else {
            tMotCache[i] = "_";
        }
    }
}

function afficherMotSecret() {
    // for (let i in tMotCache) {
    //     var lettreCache = tMotCache[i];
    //     // var newLettreCache = document.createElement('div');
    //     // newLettreCache.setAttribute('class', 'lettreCache');
    //     // newLettreCache.textContent = lettreCache;
    //     // document.getElementById('motMystere').appendChild(newLettreCache);
    //     document.getElementById('motMystere').textContent += lettreCache;
    // }
    document.getElementById('motMystere').innerHTML = "nouveau mot";
    document.getElementById('motMystere').innerHTML = tMotCache.join('');
}

/**
 * Cela commence une nouvelle partie. En remettant les valeurs par défaut
 */
function startNewGame(){
    sessionStorage.clear();
    document.body.style.backgroundColor = "rgb(255, 255, 0)";
    document.getElementById('echafaud').setAttribute('src', 'img/p0.gif');
    document.getElementById('infoDico').style.display = 'inline-block';
    document.getElementById('infosJeu').style.display = 'none';
    document.getElementById('solution').style.display = 'none';
    document.getElementById('lettresJouees').textContent = '';
    score = 0;
    nbLettreJouee = 0;
    partieActive = true;
    indiceMotDico = parseInt(Math.random() * 1600 + 1);
    motAleatoire();
    afficherMotSecret();
    sessionStorage.setItem('motSecret', indiceMotDico);
}

/**
 *  afficher ou masquer les règles
 */
function afficherRegles(){
    if (document.getElementById('texteExplications').style.display == 'block'){
        document.getElementById('texteExplications').style.display = 'none';
    } else {
        document.getElementById('texteExplications').style.display = 'block';
    }
}
/**
 * Il compare le clicked_id avec le tableau tMotSecret et si le clicked_id est égal au tableau
 * tMotSecret, il ajoutera la lettre au tableau tMotCache.
 * @param tMotSecret - le mot secret à deviner
 * @param clicked_id - l'identifiant de la lettre cliquée par l'utilisateur.
 */
function comparer(tMotSecret, clicked_id){
    var lettreOK = false;
    if(partieActive){
        //comparer la lettre cliquée avec les lettres du mot
        for (let i in tMotSecret){
            if(String.fromCharCode(clicked_id) == tMotSecret[i]){
                tMotCache[i] = tMotSecret[i];
                lettreOK = true;
            }
        }
        //si c'est une erreur incrématation du score
        if(!lettreOK){
            score++;
        }

        //remise à zero de la recherche et affichage mis à jour
        lettreOK = false;
        afficherMotSecret();

        var motTrouve = 0;
        for(let j in tMotCache){

            if (tMotCache[j] == "_"){
                motTrouve++;
            }
        }

        if (motTrouve === 0){
            document.body.style.backgroundColor = "rgb(60,185,100)";
            alert("C'est gagné !");
            partieActive = false;
        }
    }
    
}
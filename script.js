//Arrays
var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney", "Quintus", "Anais", "Styvens", "Keen-V",
"Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var objet = ["une valise", "un poivier connecté", "une épée", " un cahier", " un pneu", "une table", "un godsabre", "une truelle", "une madelaine", "un trident", "un pull rose", "un pc", "un tisonnier", "une guimbarde", "un chandelier",
    "un verre", "une table bancale", "un arbre", "une souris", "une dague"];

var temperatures = ["30", "24", "-273.15", "21", "42", "-38", "35", "584", "-8000", "28", "20", "37.2", "-30", "35", "hot", "27", "-100", "55"];

var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris' , 'Batcave', 'Maubeuge', 'Réacteur nucléaire', 'Martinique', 'Balamb garden', "L'enfer", 'Montbeilard', 'Namek', 'Londres', 'Une île', 'Une cave', 'le Caire', 'New York', 'Le tampon', 'Berlaimont',];

var verbes = ['Danser' ,'Frapper' ,'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager', 'Recoudre', 'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];

//Stocks the length of the arrays
var longNoms = noms.length;
var longObjet = objet.length;
var longTemp = temperatures.length;
var longLieux = lieux.length;
var longVerbes = verbes.length;

function hasard (P1){
    return Math.floor(Math.random() * (P1 - 1)) + 1;
}

document.getElementById("generated").addEventListener("click", function () {
    var nameChoice = document.getElementById("nameChoice").value;
    var nomRand = hasard(longNoms);
    var objRand = hasard(longObjet);
    var tempRand = hasard(longTemp);
    var lieuxRand = hasard(longLieux);
    var verbesRand = hasard(longVerbes);

    var texte = "Voici " + nameChoice +  " qui vit une merveilleuse aventure avec " + noms[nomRand] + " qui s'amuse à " + verbes[verbesRand] + " avec " +
        objet[objRand] + " dans la jolie ville de " + lieux[lieuxRand] + " alors que la température est de " + temperatures[tempRand] +
        " °C. Quelle belle histoire !" + "<br>";
    var div = document.createElement("div");
    div.className = "stories";
    var stock = document.getElementById("display");
    stock.appendChild(div);
    stock.innerHTML += texte;
});

document.getElementById("perso").addEventListener("click", function () {
    document.getElementById("story").innerHTML = "";
    var nameChoice = document.getElementById("nameChoice").value;
    var nomPerso = prompt("Quel est ton nom ?");
    var objPerso = prompt("Quel est ton objet préféré ?");
    var tempPerso = prompt("Dis-moi une température ?");
    var lieuxPerso = prompt("Quel est ton lieu préféré ?");
    var verbesPerso = prompt("Dis moi une verbe ...");

    var texte = "Voici " + nameChoice +  " qui vit une merveilleuse aventure avec " + nomPerso + " qui s'amuse à " + verbesPerso + " avec " +
        objPerso + " dans la jolie ville de " + lieuxPerso + " alors que la température est de " + tempPerso +
        " °C. Quelle belle histoire !" + "<br>";

    var div = document.createElement("div");
    div.className = "stories";
    var stock = document.getElementById("display");
    stock.appendChild(div);
    stock.innerHTML += texte;
});
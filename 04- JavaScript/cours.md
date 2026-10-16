# Cours — JavaScript

> Ce cours rassemble les notions JavaScript étudiées pendant la formation Full-Stack.
>
> Principe de progression : **comprendre → pratiquer → corriger → documenter → valider**.

---

## I. Bases du langage

### 1. Déclaration des variables

JavaScript permet de déclarer des variables avec `let`, `const` et `var`.

#### `let`

`let` permet de déclarer une variable dont la valeur peut être modifiée.

```js
let age = 20;

age = 21;
```

La variable peut être réaffectée.

`let` possède une **portée de bloc**.

```js
if (true) {
    let message = "Bonjour";
}

console.log(message); // ReferenceError
```

---

#### `const`

`const` permet de déclarer une variable qui ne peut pas être réaffectée.

```js
const age = 20;

// age = 21; // Erreur
```

Attention : avec un tableau ou un objet, `const` empêche la réaffectation de la variable, mais pas la modification du contenu.

```js
const fruits = ["pomme", "banane"];

fruits.push("orange"); // autorisé
```

Mais :

```js
fruits = ["mangue"]; // Erreur
```

---

#### `var`

`var` est l'ancienne manière de déclarer des variables.

```js
var age = 20;
```

Contrairement à `let` et `const`, `var` possède une portée de fonction plutôt qu'une portée de bloc.

En JavaScript moderne, on privilégie généralement :

```js
let
const
```

---

### 2. Types de données

JavaScript possède plusieurs types de données.

#### Types primitifs

##### Number

Les nombres entiers et décimaux utilisent le type `number`.

```js
let age = 25;

let prix = 19.99;
```

---

##### String

Une chaîne de caractères est une `string`.

```js
let nom = "Alice";
```

On peut utiliser :

```js
"Alice"

'Alice'

`Alice`
```

---

##### Boolean

Un booléen possède deux valeurs :

```js
true
false
```

Exemple :

```js
let majeur = true;
```

---

##### Undefined

Une variable déclarée mais sans valeur possède `undefined`.

```js
let age;

console.log(age); // undefined
```

---

##### Null

`null` représente volontairement l'absence de valeur.

```js
let utilisateur = null;
```

Une particularité historique de JavaScript :

```js
typeof null; // "object"
```

C'est un comportement historique du langage.

---

##### BigInt

`BigInt` permet de représenter de très grands nombres entiers.

```js
const nombre = 12345678901234567890n;
```

Le `n` indique qu'il s'agit d'un `BigInt`.

---

##### Symbol

`Symbol` permet de créer des valeurs uniques.

```js
const id = Symbol("id");
```

---

#### Objets

Les objets permettent de regrouper plusieurs propriétés.

```js
const utilisateur = {
    nom: "Alice",
    age: 25
};
```

On peut accéder aux propriétés :

```js
utilisateur.nom;

utilisateur.age;
```

---

#### Tableaux

Les tableaux permettent de stocker plusieurs valeurs.

```js
const fruits = ["pomme", "banane", "orange"];
```

Les tableaux sont des objets en JavaScript :

```js
typeof fruits; // "object"
```

---

### 3. Opérateurs et expressions

Une **expression** est une combinaison de valeurs, variables et opérateurs qui produit une valeur.

Exemple :

```js
10 + 5
```

produit :

```text
15
```

---

#### Opérateurs arithmétiques

```js
+
-
*
/
%
**
```

Exemples :

```js
10 + 3;  // 13
10 - 3;  // 7
10 * 3;  // 30
10 / 2;  // 5
10 % 3;  // 1
2 ** 3;  // 8
```

`%` donne le reste d'une division.

---

#### Opérateurs d'affectation

```js
=
+=
-=
*=
/=
```

Exemple :

```js
let nombre = 10;

nombre += 5;

// équivalent à nombre = nombre + 5

nombre *= 2;

// équivalent à nombre = nombre * 2
```

---

#### Incrémentation et décrémentation

```js
let nombre = 5;

nombre++;
```

équivaut à :

```js
nombre = nombre + 1;
```

Et :

```js
nombre--;
```

équivaut à :

```js
nombre = nombre - 1;
```

---

#### Opérateurs de comparaison

```js
>
<
>=
<=
==
===
!=
!==
```

Exemple :

```js
10 > 5;    // true
10 < 5;    // false
10 === 10; // true
```

---

#### `==` et `===`

`==` effectue potentiellement une conversion de type avant de comparer.

```js
5 == "5"; // true
```

`===` compare la valeur **et le type**.

```js
5 === "5"; // false
```

En JavaScript moderne, on privilégie généralement `===`.

---

#### Opérateurs logiques

##### AND — `&&`

Les deux conditions doivent être vraies.

```js
age >= 18 && permis === true
```

---

##### OR — `||`

Au moins une condition doit être vraie.

```js
age >= 18 || autorisation === true
```

---

##### NOT — `!`

Inverse une valeur booléenne.

```js
!true;  // false
!false; // true
```

---

#### Truthy et Falsy

JavaScript convertit certaines valeurs en `true` ou `false` dans un contexte booléen.

Valeurs falsy courantes :

```js
false
0
""
null
undefined
NaN
```

La plupart des autres valeurs sont truthy.

Exemple :

```js
if ("Bonjour") {
    console.log("La condition est vraie");
}
```

---

#### Short-circuit

Avec `&&` et `||`, JavaScript peut arrêter l'évaluation lorsqu'il connaît déjà le résultat.

```js
false && console.log("Bonjour");
```

La seconde partie n'est pas exécutée.

---

#### Priorité des opérateurs

Les opérateurs possèdent différents niveaux de priorité.

Les parenthèses permettent de rendre l'ordre explicite.

```js
(10 + 5) * 2;
```

est plus clair que de compter uniquement sur la priorité implicite.

---

### 4. Conditions

Les conditions permettent d'exécuter du code en fonction d'une situation.

#### `if`

```js
if (age >= 18) {
    console.log("Majeur");
}
```

Si la condition est vraie, le bloc est exécuté.

---

#### `else`

```js
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
```

`else` est exécuté lorsque la condition du `if` est fausse.

---

#### `else if`

Permet de tester plusieurs conditions.

```js
if (age >= 18) {
    console.log("Majeur");
} else if (age >= 13) {
    console.log("Adolescent");
} else {
    console.log("Enfant");
}
```

JavaScript teste les conditions dans l'ordre.

---

#### Conditions imbriquées

Une condition peut contenir une autre condition.

```js
if (age >= 18) {
    if (permis === true) {
        console.log("Peut conduire");
    }
}
```

---

#### Opérateur ternaire

Le ternaire permet d'écrire une condition simple sous forme d'expression.

```js
const message = age >= 18 ? "Majeur" : "Mineur";
```

Structure :

```text
condition ? valeur_si_vrai : valeur_si_faux
```

---

### 5. Instructions `switch`

`switch` permet de comparer une valeur à plusieurs cas possibles.

```js
const jour = 2;

switch (jour) {
    case 1:
        console.log("Lundi");
        break;

    case 2:
        console.log("Mardi");
        break;

    case 3:
        console.log("Mercredi");
        break;

    default:
        console.log("Jour inconnu");
}
```

---

#### `case`

Chaque `case` représente une valeur possible.

---

#### `break`

`break` permet de sortir du `switch`.

Sans `break`, JavaScript peut continuer vers le `case` suivant : c'est le **fall-through**.

---

#### `default`

`default` est exécuté lorsqu'aucun `case` ne correspond.

---

#### Comparaison stricte

Les valeurs des `case` sont comparées de manière stricte.

Cela signifie que le type compte.

```js
const valeur = 5;

switch (valeur) {
    case "5":
        console.log("string");
        break;

    case 5:
        console.log("number");
        break;
}
```

Résultat :

```text
number
```

---

### 6. Boucles et itérations

Les boucles permettent de répéter du code.

---

#### `while`

La boucle `while` répète le bloc tant que la condition est vraie.

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Résultat :

```text
0
1
2
3
4
```

La condition est vérifiée **avant chaque itération**.

---

#### `do...while`

`do...while` exécute d'abord le bloc, puis vérifie la condition.

```js
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

Le bloc est donc exécuté **au moins une fois**.

---

#### `for`

La boucle `for` regroupe généralement :

1. l'initialisation ;
2. la condition ;
3. l'incrémentation.

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Structure :

```text
for (initialisation ; condition ; incrémentation)
```

---

#### `break`

`break` permet de quitter immédiatement une boucle.

```js
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

La boucle s'arrête lorsque `i` vaut `5`.

---

#### `continue`

`continue` permet de passer directement à l'itération suivante.

```js
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}
```

Résultat :

```text
0
1
3
4
```

---

#### Portée de `let` dans une boucle

Une variable déclarée avec `let` dans une boucle `for` possède une portée limitée à la boucle.

```js
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i); // ReferenceError
```

---

### 7. Coercition de types

La **coercition** correspond à la conversion d'une valeur d'un type vers un autre, parfois automatiquement.

---

#### Conversion explicite

On peut demander explicitement une conversion.

##### String → Number

```js
Number("25");
```

Résultat :

```js
25
```

---

##### Number → String

```js
String(25);
```

Résultat :

```js
"25"
```

---

##### Conversion en Boolean

```js
Boolean(1);  // true
Boolean(0);  // false
Boolean(""); // false
```

---

#### Coercition implicite

JavaScript peut convertir automatiquement les types dans certaines expressions.

```js
"5" + 2;
```

Résultat :

```js
"52"
```

Le `+` avec une chaîne entraîne ici une concaténation.

Mais :

```js
"5" - 2;
```

donne :

```js
3
```

JavaScript convertit alors `"5"` en nombre.

---

#### Coercition et comparaison

Avec `==`, JavaScript peut convertir les types :

```js
5 == "5"; // true
```

Avec `===`, aucune coercition de ce type n'est effectuée :

```js
5 === "5"; // false
```

---

### 8. Tableaux

Les tableaux permettent de stocker plusieurs valeurs dans une même structure.

```js
const fruits = ["pomme", "banane", "orange"];
```

Les indices commencent à `0`.

```text
index :    0         1          2

           ↓         ↓          ↓

fruits : ["pomme", "banane", "orange"]
```

---

#### Accéder à un élément

```js
fruits[0]; // "pomme"
fruits[1]; // "banane"
```

---

#### `length`

`length` donne le nombre d'éléments.

```js
fruits.length;
```

Pour :

```js
["pomme", "banane", "orange"]
```

le résultat est :

```text
3
```

---

#### Dernier élément

```js
fruits[fruits.length - 1];
```

---

#### Modifier un élément

```js
fruits[1] = "mangue";
```

---

### 9. Ajouter et supprimer des éléments

#### `push()`

Ajoute un ou plusieurs éléments à la fin.

```js
fruits.push("orange");
```

`push()` modifie le tableau original.

---

#### `pop()`

Supprime le dernier élément.

```js
const dernier = fruits.pop();
```

`pop()` retourne l'élément supprimé.

---

#### `unshift()`

Ajoute un élément au début.

```js
fruits.unshift("mangue");
```

---

#### `shift()`

Supprime le premier élément.

```js
const premier = fruits.shift();
```

---

### 10. Parcourir un tableau

#### Boucle `for`

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

On utilise :

```js
i < fruits.length
```

et non :

```js
i <= fruits.length
```

car le dernier index est :

```js
fruits.length - 1
```

---

#### `for...of`

`for...of` permet de parcourir directement les valeurs.

```js
for (const fruit of fruits) {
    console.log(fruit);
}
```

---

#### `for...in`

`for...in` parcourt les clés / indices énumérables.

```js
for (const index in fruits) {
    console.log(index);
}
```

Pour un tableau, les indices sont récupérés sous forme de chaînes.

```text
"0"
"1"
"2"
```

Pour parcourir les valeurs d'un tableau, on préfère généralement `for...of`.

---

### 11. Rechercher dans un tableau

#### `includes()`

Vérifie si une valeur existe.

```js
fruits.includes("orange");
```

Retourne :

```text
true
```

ou :

```text
false
```

`includes()` ne modifie pas le tableau.

---

#### `indexOf()`

Retourne l'indice de la première occurrence.

```js
fruits.indexOf("orange");
```

Si la valeur n'existe pas :

```js
-1
```

On peut également préciser un indice de départ :

```js
fruits.indexOf("orange", 2);
```

---

#### `find()`

Retourne le **premier élément** qui satisfait une condition.

```js
const nombres = [5, 12, 20, 8];

const resultat = nombres.find(n => n > 10);
```

Résultat :

```text
12
```

Si aucun élément ne correspond :

```js
undefined
```

Avec des objets :

```js
const utilisateurs = [
    { nom: "Alice", age: 20 },
    { nom: "Bob", age: 17 }
];

const utilisateur = utilisateurs.find(user => user.age < 18);
```

`find()` retourne l'objet complet correspondant.

---

#### `findIndex()`

Retourne l'indice du premier élément correspondant.

```js
const index = nombres.findIndex(n => n > 10);
```

Si aucun élément ne correspond :

```js
-1
```

---

#### `some()`

Vérifie si **au moins un** élément satisfait la condition.

```js
const majeurExiste = nombres.some(n => n >= 18);
```

Retourne :

```text
true
```

ou :

```text
false
```

---

#### `every()`

Vérifie si **tous** les éléments satisfont la condition.

```js
const tousPositifs = nombres.every(n => n > 0);
```

Retourne un booléen.

---

### 12. Extraire et combiner des tableaux

#### `slice()`

Extrait une portion du tableau **sans modifier l'original**.

```js
const nombres = [10, 20, 30, 40];

const resultat = nombres.slice(1, 3);
```

Résultat :

```js
[20, 30]
```

La borne de fin est **exclusive**.

---

#### `splice()`

Modifie directement le tableau.

```js
const nombres = [10, 20, 30, 40];

const supprimes = nombres.splice(1, 2);
```

Le tableau devient :

```js
[10, 40]
```

Et `supprimes` contient :

```js
[20, 30]
```

`splice()` peut également servir à insérer ou remplacer des éléments.

---

#### `concat()`

Combine des tableaux sans modifier les tableaux originaux.

```js
const a = [1, 2];

const b = [3, 4];

const resultat = a.concat(b);
```

Résultat :

```js
[1, 2, 3, 4]
```

---

### 13. Transformer et filtrer

#### `map()`

`map()` transforme **chaque élément** et retourne un nouveau tableau.

```js
const nombres = [1, 2, 3];

const doubles = nombres.map(n => n * 2);
```

Résultat :

```js
[2, 4, 6]
```

Avec des objets :

```js
const noms = utilisateurs.map(user => user.nom);
```

---

#### `filter()`

`filter()` conserve uniquement les éléments qui satisfont une condition.

```js
const nombres = [5, 10, 15, 20];

const grands = nombres.filter(n => n > 10);
```

Résultat :

```js
[15, 20]
```

`filter()` retourne toujours un tableau.

---

#### `reduce()`

`reduce()` permet de parcourir un tableau en accumulant progressivement une valeur.

```js
const nombres = [1, 2, 3, 4];

const somme = nombres.reduce((accumulateur, nombre) => {
    return accumulateur + nombre;
}, 0);
```

Résultat :

```text
10
```

Le deuxième argument (`0`) représente la valeur initiale de l'accumulateur.

---

### 14. Trier et inverser

#### `sort()`

`sort()` trie les éléments du tableau.

Attention : le tri par défaut ne correspond pas à un tri numérique classique.

```js
const nombres = [10, 2, 30, 5];

nombres.sort();
```

Pour trier des nombres dans l'ordre croissant :

```js
nombres.sort((a, b) => a - b);
```

Dans l'ordre décroissant :

```js
nombres.sort((a, b) => b - a);
```

---

#### Comparateur de `sort()`

Le comparateur suit cette logique :

```text
résultat négatif → a avant b
résultat positif → b avant a
résultat égal    → aucune préférence
```

Ainsi :

```js
(a, b) => a - b
```

donne un ordre croissant.

Et :

```js
(a, b) => b - a
```

donne un ordre décroissant.

---

#### Trier des objets

```js
const produits = [
    { nom: "PC", prix: 900 },
    { nom: "Souris", prix: 25 },
    { nom: "Clavier", prix: 50 }
];

produits.sort((a, b) => a.prix - b.prix);
```

Les objets sont triés selon leur propriété `prix`.

---

#### Mutation de `sort()`

`sort()` modifie le tableau original.

```js
const nombres = [5, 2, 8, 1];

const resultat = nombres.sort((a, b) => a - b);
```

`nombres` est lui aussi trié.

---

#### `reverse()`

`reverse()` inverse l'ordre des éléments.

```js
const nombres = [1, 2, 3, 4];

nombres.reverse();
```

Résultat :

```js
[4, 3, 2, 1]
```

`reverse()` modifie également le tableau original.

---

### 15. Mutation et copie

Certaines méthodes modifient directement le tableau :

```text
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

D'autres créent un nouveau tableau :

```text
slice()
concat()
map()
filter()
```

---

#### Copier un tableau avec le spread

```js
const fruits = ["pomme", "banane", "orange"];

const copie = [...fruits];
```

`...` déplie les éléments du tableau dans un nouveau tableau.

On peut également combiner des tableaux :

```js
const a = [1, 2];

const b = [3, 4];

const resultat = [...a, ...b];
```

Résultat :

```js
[1, 2, 3, 4]
```

---

#### Éviter une mutation

Au lieu de :

```js
nombres.sort((a, b) => a - b);
```

on peut faire :

```js
const resultat = [...nombres].sort((a, b) => a - b);
```

Le tri s'effectue alors sur la copie.

Même principe :

```js
const inverse = [...nombres].reverse();
```

---

### 16. Destructuration des tableaux

La destructuration permet d'extraire directement les valeurs d'un tableau dans des variables.

```js
const couleurs = ["rouge", "vert", "bleu"];

const [premiere, deuxieme, troisieme] = couleurs;
```

On obtient :

```text
premiere  → "rouge"
deuxieme  → "vert"
troisieme → "bleu"
```

Cela correspond conceptuellement à :

```js
const premiere = couleurs[0];

const deuxieme = couleurs[1];

const troisieme = couleurs[2];
```

---

#### Ignorer une valeur

On peut ignorer une position avec une virgule :

```js
const nombres = [10, 20, 30];

const [a, , c] = nombres;
```

Résultat :

```text
a → 10
c → 30
```

La valeur `20` est ignorée.

---

### 17. Mémo des principales méthodes de tableaux

| Méthode       | Rôle                            | Modifie le tableau ? |
| ------------- | ------------------------------- | -------------------- |
| `push()`      | Ajoute à la fin                 | ✅                    |
| `pop()`       | Supprime à la fin               | ✅                    |
| `unshift()`   | Ajoute au début                 | ✅                    |
| `shift()`     | Supprime au début               | ✅                    |
| `includes()`  | Vérifie l'existence             | ❌                    |
| `indexOf()`   | Cherche un indice               | ❌                    |
| `find()`      | Premier élément correspondant   | ❌                    |
| `findIndex()` | Indice du premier correspondant | ❌                    |
| `some()`      | Au moins un correspond ?        | ❌                    |
| `every()`     | Tous correspondent ?            | ❌                    |
| `slice()`     | Extrait une portion             | ❌                    |
| `splice()`    | Supprime/insère/remplace        | ✅                    |
| `concat()`    | Combine des tableaux            | ❌                    |
| `map()`       | Transforme chaque élément       | ❌                    |
| `filter()`    | Sélectionne des éléments        | ❌                    |
| `reduce()`    | Accumule vers une valeur        | ❌                    |
| `sort()`      | Trie                            | ✅                    |
| `reverse()`   | Inverse                         | ✅                    |

---

### 18. Mémo de sélection

Lorsqu'on rencontre un problème avec un tableau, on peut raisonner ainsi :

```text
Est-ce que je cherche à savoir si quelque chose existe ?

        ↓

      some()

Est-ce que je veux le premier élément correspondant ?

        ↓

      find()

Est-ce que je veux tous les éléments correspondants ?

        ↓

     filter()

Est-ce que je veux transformer chaque élément ?

        ↓

      map()

Est-ce que je veux réduire tout le tableau à une valeur ?

        ↓

     reduce()
```

Cette distinction est particulièrement importante pour travailler efficacement avec les tableaux JavaScript.

---

## II. Fonctions et portée

### 19. Déclaration de fonction

Une fonction est un bloc de code réutilisable qui peut recevoir des données et éventuellement retourner une valeur.

Syntaxe :

```js
function additionner(a, b) {
    return a + b;
}
```

La fonction est déclarée avec le mot-clé `function`.

Pour l'exécuter, il faut l'appeler :

```js
additionner(5, 3);
```

Résultat :

```text
8
```

---

#### Paramètres et arguments

Dans :

```js
function additionner(a, b) {
    return a + b;
}
```

`a` et `b` sont les **paramètres**.

Dans :

```js
additionner(5, 3);
```

`5` et `3` sont les **arguments**.

---

#### `return`

`return` permet de renvoyer une valeur.

```js
function carre(nombre) {
    return nombre ** 2;
}
```

```js
const resultat = carre(5);

console.log(resultat); // 25
```

`return` termine également immédiatement l'exécution de la fonction.

---

#### `console.log()` et `return`

Ces deux mécanismes sont différents.

```js
function afficherNom(nom) {
    console.log(nom);
}
```

La fonction affiche une valeur mais ne la retourne pas.

À l'inverse :

```js
function obtenirNom(nom) {
    return nom;
}
```

La fonction retourne la valeur, qui peut ensuite être stockée ou utilisée dans une autre expression.

---

### 20. Paramètres par défaut

Un paramètre peut posséder une valeur par défaut.

```js
function saluer(nom = "Inconnu") {
    return `Bonjour ${nom}`;
}
```

Si l'argument est absent :

```js
saluer();
```

la valeur `"Inconnu"` est utilisée.

Le paramètre par défaut est également utilisé lorsqu'on passe explicitement `undefined` :

```js
saluer(undefined);
```

En revanche, `null` ne déclenche pas la valeur par défaut :

```js
saluer(null);
```

Le paramètre reçoit alors `null`.

---

### 21. Portée des variables

La **portée (scope)** détermine l'endroit du programme dans lequel une variable est accessible.

Les notions de portée avec `let`, `const` et `var` ont été étudiées dans les bases du langage.

Rappel :

```js
if (true) {
    let message = "Bonjour";
}

console.log(message); // ReferenceError
```

`message` appartient au bloc `if`.

---

### 22. Scope Chain

Lorsqu'une variable n'est pas trouvée dans le scope actuel, JavaScript recherche dans les scopes extérieurs.

Exemple :

```js
let a = "global";

function externe() {
    let b = "externe";

    function interne() {
        let c = "interne";

        console.log(c);
        console.log(b);
        console.log(a);
    }

    interne();
}

externe();
```

Dans `interne()` :

* `c` est trouvé dans le scope actuel ;
* `b` est recherché dans le scope parent ;
* `a` est recherché dans le scope encore supérieur.

On parle de **Scope Chain**.

Le principe est donc :

```text
scope actuel
     ↓
scope parent
     ↓
scope supérieur
     ↓
scope global
```

JavaScript cherche une variable en remontant cette chaîne jusqu'à la trouver.

---

### 23. Closures

Une **closure** apparaît lorsqu'une fonction conserve l'accès aux variables de son scope extérieur, même après la fin de l'exécution de la fonction extérieure.

Exemple :

```js
function creerCompteur() {
    let compteur = 0;

    function incrementer() {
        compteur++;

        return compteur;
    }

    return incrementer;
}
```

On peut créer un compteur :

```js
const compteur = creerCompteur();

console.log(compteur()); // 1
console.log(compteur()); // 2
console.log(compteur()); // 3
```

Même si `creerCompteur()` a terminé son exécution, la fonction `incrementer()` conserve l'accès à `compteur`.

C'est le principe d'une **closure**.

---

#### Closures indépendantes

Chaque appel de la fonction extérieure peut créer son propre environnement.

```js
function creerCompteur() {
    let compteur = 0;

    return function() {
        compteur++;

        return compteur;
    };
}

const compteur1 = creerCompteur();
const compteur2 = creerCompteur();

console.log(compteur1()); // 1
console.log(compteur1()); // 2
console.log(compteur2()); // 1
console.log(compteur1()); // 3
console.log(compteur2()); // 2
```

`compteur1` et `compteur2` possèdent chacun leur propre `compteur`.

---

### 24. Expressions de fonctions

Une fonction peut être stockée dans une variable.

Déclaration classique :

```js
function additionner(a, b) {
    return a + b;
}
```

Expression de fonction :

```js
const additionner = function(a, b) {
    return a + b;
};
```

Dans ce deuxième cas, la fonction est une **valeur stockée dans une variable**.

On peut ensuite l'appeler :

```js
additionner(5, 3);
```

---

#### Les fonctions sont des valeurs

Une fonction peut être affectée à une autre variable.

```js
const multiplier = function(a, b) {
    return a * b;
};

const operation = multiplier;

console.log(operation(3, 7)); // 21
```

`operation` et `multiplier` référencent ici la même fonction.

---

#### Fonction comme argument

Une fonction peut également être passée comme argument à une autre fonction.

```js
function executer(operation) {
    return operation(10, 5);
}

const additionner = function(a, b) {
    return a + b;
};

console.log(executer(additionner)); // 15
```

Le paramètre `operation` reçoit une fonction.

Cela permet de traiter les fonctions comme des valeurs.

---

### 25. Fonctions fléchées

Les fonctions fléchées (`arrow functions`) constituent une syntaxe plus concise pour écrire des fonctions.

Expression de fonction classique :

```js
const additionner = function(a, b) {
    return a + b;
};
```

Fonction fléchée équivalente :

```js
const additionner = (a, b) => {
    return a + b;
};
```

---

#### Retour implicite

Lorsqu'une fonction fléchée contient une seule expression, on peut supprimer les accolades et le `return`.

```js
const additionner = (a, b) => a + b;
```

C'est équivalent à :

```js
const additionner = (a, b) => {
    return a + b;
};
```

---

#### Attention au `return`

Avec des accolades, le `return` doit être écrit explicitement si on veut retourner une valeur.

```js
const doubler = x => {
    return x * 2;
};
```

Mais :

```js
const doubler = x => {
    x * 2;
};
```

retourne :

```js
undefined
```

---

#### Un seul paramètre

Avec un seul paramètre, les parenthèses sont optionnelles.

```js
const carre = n => n ** 2;
```

Équivalent à :

```js
const carre = (n) => n ** 2;
```

Avec plusieurs paramètres, les parenthèses sont nécessaires :

```js
const additionner = (a, b) => a + b;
```

---

#### Retour implicite d'un objet

Attention au cas particulier des objets.

Ceci :

```js
const creerUtilisateur = nom => {
    nom: nom
};
```

ne retourne pas l'objet attendu.

Les accolades sont interprétées comme le bloc de la fonction.

Le résultat est :

```js
undefined
```

Pour retourner implicitement un objet, on utilise des parenthèses :

```js
const creerUtilisateur = nom => ({
    nom: nom
});
```

On peut également utiliser la syntaxe abrégée des propriétés :

```js
const creerUtilisateur = nom => ({
    nom
});
```

---

### 26. Contexte d'exécution

Lorsqu'un code JavaScript est exécuté, le moteur crée un **contexte d'exécution (Execution Context)**.

On peut le voir comme un environnement contenant les informations nécessaires à l'exécution du code.

Deux catégories importantes sont :

* le contexte d'exécution global ;
* le contexte d'exécution d'une fonction.

---

#### Contexte global

Lorsque le programme commence, JavaScript crée le contexte global.

Exemple :

```js
let x = 10;

console.log(x);
```

Le code global est exécuté dans le contexte global.

---

#### Contexte de fonction

Chaque fois qu'une fonction est appelée, JavaScript crée un nouveau contexte d'exécution pour cet appel.

```js
function test(a) {
    let y = 20;

    return a + y;
}

console.log(test(5));
```

Lors de :

```js
test(5);
```

un contexte de fonction est créé.

Il contient notamment les informations nécessaires à cette exécution :

```text
a → 5
y → 20
```

Le résultat est :

```text
25
```

---

#### Déclaration ≠ appel

La déclaration d'une fonction :

```js
function additionner(a, b) {
    return a + b;
}
```

ne signifie pas que son code est immédiatement exécuté.

Le contexte de fonction est créé lorsqu'elle est appelée :

```js
additionner(5, 3);
```

Chaque appel possède son propre contexte d'exécution.

Par exemple :

```js
additionner(5, 3);
additionner(10, 20);
```

produit deux exécutions distinctes.

---

### 27. Call Stack — pile d'appels

La **Call Stack** est la pile utilisée par JavaScript pour suivre les fonctions en cours d'exécution.

Elle fonctionne selon le principe :

> **LIFO — Last In, First Out**

Le dernier élément ajouté à la pile est le premier à être retiré.

---

#### Exemple simple

```js
function a() {
    console.log("A");
}

function b() {
    a();

    console.log("B");
}

b();
```

Lorsque `b()` est appelée :

```text
┌─────────────┐
│     b()     │ ← sommet
├─────────────┤
│   global    │
└─────────────┘
```

Lorsque `b()` appelle `a()` :

```text
┌─────────────┐
│     a()     │ ← sommet
├─────────────┤
│     b()     │
├─────────────┤
│   global    │
└─────────────┘
```

Lorsque `a()` termine, son contexte est retiré de la pile.

On revient alors à `b()` :

```text
┌─────────────┐
│     b()     │ ← sommet
├─────────────┤
│   global    │
└─────────────┘
```

`b()` peut alors continuer son exécution.

---

#### Fonctions imbriquées et Call Stack

Exemple :

```js
function premier() {
    console.log("1");
}

function deuxieme() {
    console.log("2");
    premier();
    console.log("3");
}

function troisieme() {
    console.log("4");
    deuxieme();
    console.log("5");
}

troisieme();
```

Ordre d'affichage :

```text
4
2
1
3
5
```

Lorsque `troisieme()` appelle `deuxieme()`, puis `deuxieme()` appelle `premier()`, la pile devient :

```text
┌──────────────┐
│ premier()    │ ← sommet
├──────────────┤
│ deuxieme()   │
├──────────────┤
│ troisieme()  │
├──────────────┤
│ global       │
└──────────────┘
```

`premier()` doit terminer avant que `deuxieme()` puisse continuer.

Puis `deuxieme()` doit terminer avant que `troisieme()` puisse continuer.

C'est pourquoi :

```text
3
```

est affiché avant :

```text
5
```

---


## III. Objets et modèle objet JavaScript

- [x] Objets et propriétés
- [x] Méthodes
- [x] this
- [x] Fonctions constructrices
- [x] Opérateur new
- [x] Instances
- [x] Prototypes
- [x] prototype
- [x] Chaîne de prototypes (prototype chain)
- [x] Héritage en JavaScript
- [x] Classes ES6 (class, extends, super)
- [x] Encapsulation et abstraction en JavaScript
- [x] IIFE (Immediately Invoked Function Expression)

---

### 1. Objets et propriétés

En JavaScript, un objet permet de regrouper plusieurs données sous une même variable. Il sert à représenter une entité, comme une personne, un produit, une voiture, etc.

```js
const personne = {
    nom: "Alice",
    age: 25,
    ville: "Paris"
};
```

Voici les propriétés de cet objet :

- `nom`
- `age`
- `ville`

On peut accéder à ces propriétés avec la notation pointée :

```js
console.log(personne.nom); // Alice
console.log(personne.age); // 25
```

On peut aussi utiliser la notation avec crochets :

```js
console.log(personne["ville"]); // Paris
```

---

### 2. Méthodes

Une méthode est une fonction attachée à un objet.

```js
const personne = {
    nom: "Bob",
    saluer() {
        console.log(`Bonjour, je m'appelle ${this.nom}`);
    }
};

personne.saluer();
```

Ici, `saluer()` est une méthode de l'objet `personne`.

Cela permet de regrouper les données et le comportement dans un même bloc logique.

---

### 3. `this`

Le mot-clé `this` permet de faire référence à l'objet courant dans un contexte donné.

```js
const user = {
    nom: "Charlie",
    afficherNom() {
        console.log(this.nom);
    }
};

user.afficherNom(); // Charlie
```

Le comportement de `this` dépend du contexte d'appel :

- dans une méthode d'objet, `this` représente l'objet ;
- dans une fonction classique, `this` dépend de l'appel ;
- dans une fonction fléchée, `this` ne se recrée pas.

---

### 4. Fonctions constructrices

Une fonction constructeur permet de créer plusieurs objets ayant une même structure.

```js
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
}

const p1 = new Personne("Alice", 25);
const p2 = new Personne("Bob", 30);

console.log(p1.nom); // Alice
console.log(p2.age); // 30
```

Une fonction constructeur sert de modèle pour créer des instances.

---

### 5. Opérateur `new`

Le mot-clé `new` permet d'instancier un objet à partir d'une fonction constructeur.

```js
const voiture = new Personne("Renault", 2024);
```

Le rôle de `new` est de :

1. créer un nouvel objet vide ;
2. l'associer à la fonction constructeur ;
3. initialiser ses propriétés via `this` ;
4. retourner cet objet.

---

### 6. Instances

Une instance est un objet créé à partir d'un constructeur.

```js
function Animal(nom) {
    this.nom = nom;
}

const chien = new Animal("Rex");
const chat = new Animal("Minou");
```

`chien` et `chat` sont deux instances distinctes, mais elles partagent le même modèle de création.

---

### 7. Prototypes

En JavaScript, presque tout est basé sur le prototype.

Un prototype est un objet hérité par d'autres objets.

```js
function Personne(nom) {
    this.nom = nom;
}

Personne.prototype.saluer = function() {
    console.log(`Bonjour, je suis ${this.nom}`);
};

const p = new Personne("Alice");
p.saluer();
```

Le mot-clé `prototype` permet d'ajouter des méthodes communes à toutes les instances.

Cela évite de dupliquer la même méthode dans chaque objet.

---

### 8. `prototype`

Chaque fonction constructeur possède un objet `prototype`.

Cet objet contient les méthodes partagées par les instances créées avec cette fonction.

```js
function Voiture(marque) {
    this.marque = marque;
}

Voiture.prototype.demarrer = function() {
    console.log(`${this.marque} démarre.`);
};
```

Quand on appelle `voiture.demarrer()`, JavaScript cherche d'abord la méthode sur l'instance, puis dans son prototype.

---

### 9. Chaîne de prototypes (prototype chain)

JavaScript recherche les propriétés dans une chaîne appelée prototype chain.

```js
const animal = {
    manger() {
        console.log("Je mange");
    }
};

const chien = Object.create(animal);
chien.manger();
```

Ici :

- `chien` a son propre objet ;
- `animal` est son prototype ;
- si `chien` n'a pas la propriété, JavaScript la cherche dans `animal`.

On parle donc de chaîne de prototypes.

---

### 10. Héritage en JavaScript

L'héritage permet de créer une classe ou un objet qui reprend les caractéristiques d'un autre.

```js
class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    manger() {
        console.log(`${this.nom} mange.`);
    }
}

class Chien extends Animal {
    aboyer() {
        console.log(`${this.nom} aboie.`);
    }
}

const chien = new Chien("Rex");
chien.manger();
chien.aboyer();
```

La classe `Chien` hérite des propriétés et méthodes de `Animal`.

---

### 11. Classes ES6 (`class`, `extends`, `super`)

Depuis ES6, JavaScript introduit la syntaxe `class` pour écrire des objets de manière plus claire.

```js
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    saluer() {
        console.log(`Bonjour, je suis ${this.nom}`);
    }
}

const p = new Personne("Alice", 25);
p.saluer();
```

Le mot-clé `extends` permet de créer une sous-classe.

```js
class Etudiant extends Personne {
    constructor(nom, age, niveau) {
        super(nom, age);
        this.niveau = niveau;
    }
}
```

- `super()` appelle le constructeur de la classe parent ;
- `extends` indique l'héritage ;
- `class` rend le code plus lisible et proche des langages orientés objet.

---

### 12. Encapsulation et abstraction en JavaScript

L'encapsulation consiste à regrouper les données et les comportements liés dans une même structure.

L'abstraction consiste à cacher les détails internes d'implémentation et exposer uniquement ce qui est utile.

```js
class CompteBancaire {
    constructor(solde) {
        this._solde = solde;
    }

    getSolde() {
        return this._solde;
    }

    deposer(montant) {
        this._solde += montant;
    }
}
```

Ici, l'utilisateur n'a pas besoin de connaître les détails internes pour utiliser le compte.

Cette approche rend le code plus sûr, plus lisible et plus maintenable.

---

### 13. IIFE (Immediately Invoked Function Expression)

Une IIFE est une fonction qui s'exécute immédiatement après sa définition.

```js
(function() {
    const message = "Bonjour";
    console.log(message);
})();
```

Elle sert souvent à :

- isoler des variables dans un scope local ;
- éviter les conflits de noms ;
- créer une zone de code autonome.

Exemple :

```js
(function() {
    let compteur = 0;

    compteur++;
    console.log(compteur);
})();
```

La variable `compteur` n'est visible qu'à l'intérieur de la fonction.

---

### 14. Résumé

Les objets sont au cœur du modèle objet JavaScript.

On retient surtout que :

- un objet contient des propriétés et des méthodes ;
- `this` désigne l'objet courant ;
- les fonctions constructrices créent plusieurs objets similaires ;
- `new` instancie un objet ;
- les prototypes permettent le partage de méthodes ;
- la chaîne de prototypes recherche les propriétés dans les objets parents ;
- les classes ES6 simplifient la syntaxe orientée objet ;
- l'héritage permet de réutiliser le code ;
- les IIFE protègent le scope et isolent le code.

C'est ce modèle qui rend JavaScript très flexible et très utilisé dans les applications modernes.

---

## IV. Navigateur et asynchronisme

### 1. Sélection des éléments du DOM

Le DOM (Document Object Model) représente la structure HTML d'une page. JavaScript peut accéder aux éléments du document pour les lire, les modifier et réagir aux actions utilisateur.

Les sélecteurs les plus courants sont :

```js
const titre = document.getElementById("titre");
const paragraphe = document.querySelector("p");
const cartes = document.querySelectorAll(".carte");
```

`getElementById()` récupère un élément par son identifiant.

`querySelector()` retourne le premier élément correspondant au sélecteur CSS.

`querySelectorAll()` retourne une liste de tous les éléments correspondants.

Exemple :

```js
const bouton = document.getElementById("bouton");
console.log(bouton.textContent);
```

---

### 2. Gestion des événements

En JavaScript, un événement correspond à une action déclenchée par l'utilisateur ou le navigateur.

Exemples :

- clic
- soumission de formulaire
- survol
- touche du clavier
- chargement de la page

On ajoute un écouteur avec `addEventListener()`.

```js
const bouton = document.getElementById("bouton");

bouton.addEventListener("click", () => {
    console.log("Bouton cliqué !");
});
```

Le premier argument est le type d'événement, le second est la fonction à exécuter.

---

### 3. Propagation des événements

La propagation décrit le chemin parcouru par un événement dans l'arbre DOM.

Il existe deux phases principales :

1. **capturing** : du parent vers l'enfant ;
2. **bubbling** : de l'enfant vers le parent.

Exemple :

```js
document.body.addEventListener("click", () => {
    console.log("body");
});

document.getElementById("bouton").addEventListener("click", () => {
    console.log("bouton");
});
```

Si on clique sur le bouton, l'événement peut d'abord passer par le parent puis remonter.

On peut stopper la propagation avec :

```js
event.stopPropagation();
```

Cela permet d'empêcher un événement de continuer vers les parents.

---

### 4. Création et parcours des nœuds

Le DOM est un arbre de nœuds : éléments, texte, attributs, etc.

On peut créer un nouvel élément avec `createElement()`.

```js
const nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "Bonjour";
```

On l'ajoute ensuite dans le DOM :

```js
document.body.appendChild(nouveauParagraphe);
```

Pour parcourir les nœuds :

```js
const parent = document.getElementById("conteneur");
console.log(parent.childNodes);
console.log(parent.firstChild);
console.log(parent.nextSibling);
```

On peut aussi utiliser :

- `children` pour accéder aux éléments enfants ;
- `parentNode` pour remonter vers le parent ;
- `appendChild()` pour ajouter un enfant.

---

### 5. Modification des attributs et des styles

On peut modifier les attributs HTML d'un élément.

```js
const image = document.querySelector("img");
image.setAttribute("alt", "Image de présentation");
image.removeAttribute("alt");
```

Pour modifier un style inline :

```js
const titre = document.getElementById("titre");
titre.style.color = "red";
titre.style.fontSize = "24px";
```

On peut aussi manipuler les classes :

```js
titre.classList.add("active");
titre.classList.remove("active");
titre.classList.toggle("active");
```

C'est une manière très courante de modifier l'apparence d'un élément.

---

### 6. Callbacks

Une callback est une fonction passée en argument à une autre fonction, puis appelée plus tard.

```js
function afficherMessage(message) {
    console.log(message);
}

function traiter(callback) {
    callback("Bonjour");
}

traiter(afficherMessage);
```

Les callbacks sont très utilisées avec les événements et les fonctions asynchrones.

Exemple avec un bouton :

```js
bouton.addEventListener("click", () => {
    console.log("Clic reçu");
});
```

Ici, la fonction anonyme est une callback appelée au moment du clic.

---

### 7. Promesses

Une promesse représente un résultat qui sera disponible dans le futur.

Une promesse peut être :

- en attente : `pending` ;
- réussie : `fulfilled` ;
- rejetée : `rejected`.

```js
const promesse = new Promise((resolve, reject) => {
    const ok = true;

    if (ok) {
        resolve("Succès");
    } else {
        reject("Erreur");
    }
});

promesse
    .then((message) => {
        console.log(message);
    })
    .catch((erreur) => {
        console.error(erreur);
    });
```

`then()` s'exécute si la promesse est résolue.

`catch()` s'exécute si elle est rejetée.

`finally()` exécute du code dans tous les cas.

---

### 8. Async et await

`async` et `await` permettent d'écrire du code asynchrone de manière plus lisible.

```js
async function chargerDonnees() {
    const reponse = await fetch("https://api.example.com/users");
    const donnees = await reponse.json();
    console.log(donnees);
}
```

`async` transforme une fonction en fonction asynchrone.

`await` suspend l'exécution de la fonction async jusqu'à ce que la Promise soit settled (fulfilled ou rejected). Le reste du programme synchrone peut continuer à s'exécuter.

Cela évite l'enchevêtrement des callbacks et rend le code plus proche du code synchrone.

---

### 9. API Fetch

`fetch()` permet de faire des requêtes HTTP depuis JavaScript.

```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

Fetch retourne une promesse.

On peut alors :

- vérifier la réponse ;
- convertir en JSON ;
- utiliser les données obtenues.

Exemple :

```js
async function recupererUtilisateurs() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const utilisateurs = await reponse.json();
    console.log(utilisateurs);
}
```

---

### 10. Boucle d'événements

La boucle d'événements est le mécanisme qui permet à JavaScript de traiter les tâches asynchrones sans bloquer le navigateur.

Le moteur JavaScript utilise :

- la pile d'appels (call stack) ;
- la file d'attente des tâches (task queue) ;
- la boucle d'événements.

Exemple :

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Résultat :

```text
A
C
B
```

`setTimeout` est planifié plus tard, tandis que le reste du code continue à s'exécuter immédiatement.

---

### 11. Gestion des erreurs

En JavaScript, les erreurs doivent être anticipées pour éviter un plantage de l'application.

#### Avec `try...catch`

```js
try {
    console.log(variableInexistante);
} catch (error) {
    console.error("Erreur :", error.message);
}
```

#### Avec les promesses

```js
fetch("https://example.com")
    .then(response => response.json())
    .catch(error => {
        console.error("Erreur réseau :", error);
    });
```

La gestion d'erreurs est essentielle pour :

- les appels réseau ;
- la lecture de données ;
- les interactions utilisateur ;
- la robustesse du code.

---

### 12. Timers et intervalles

JavaScript permet de programmer des actions à l'avenir.

#### `setTimeout()`

Exécute une fonction une seule fois après un délai.

```js
setTimeout(() => {
    console.log("Après 2 secondes");
}, 2000);
```

#### `setInterval()`

Exécute une fonction répétitivement à intervalle régulier.

```js
const id = setInterval(() => {
    console.log("Tick");
}, 1000);
```

Pour arrêter un intervalle :

```js
clearInterval(id);
```

Les timers sont utiles pour :

- les animations ;
- les compteurs ;
- les rafraîchissements ;
- les tâches répétées.

---

### 13. Résumé

Le navigateur et l'asynchronisme sont au cœur du JavaScript moderne.

On retient les points suivants :

- le DOM permet d'accéder aux éléments HTML ;
- `addEventListener()` sert à gérer les événements ;
- la propagation permet de comprendre le flux des évènements ;
- on peut créer et modifier des nœuds du DOM ;
- les callbacks sont des fonctions appelées plus tard ;
- les promesses gèrent les tâches asynchrones ;
- `async` et `await` rendent le code plus lisible ;
- `fetch()` permet d'appeler des APIs ;
- la boucle d'événements organise l'exécution ;
- les erreurs doivent être gérées correctement ;
- les timers permettent des actions planifiées.

Cette partie est fondamentale pour créer des pages dynamiques, interactives et réactives.

---
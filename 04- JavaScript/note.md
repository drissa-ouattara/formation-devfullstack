
# I. Base du language

## Déclaration des variables

Pour la déclaration des variables en JavaScript, on distingue trois mots-clés : `let`, `const` et `var`.

Quelques caractéristiques :

* **Initialisation obligatoire** : `const`
* **Réaffectation possible** : `let` et `var`
* **Portée de bloc** : `let` et `const`
* **Portée de fonction** : `var`
* **Temporal Dead Zone (TDZ)** : `let` et `const`
* **Hoisting particulier** : `var`

### À retenir

* `const` : pas de réaffectation de la liaison.
* `let` : réaffectation possible et portée de bloc.
* `var` : réaffectation possible et portée de fonction.

## Types de données en JavaScript

### 1. Types primitifs

JavaScript possède 7 types primitifs :

* `string` → chaîne de caractères
* `number` → nombres entiers, décimaux et valeurs spéciales (`NaN`, `Infinity`)
* `bigint` → très grands entiers
* `boolean` → `true` ou `false`
* `undefined` → valeur non définie
* `null` → absence intentionnelle de valeur
* `symbol` → valeur primitive unique

---

### 2. `typeof`

`typeof` permet de connaître le type d'une valeur.

```js
typeof 42          // "number"
typeof "42"        // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof 100n        // "bigint"
typeof Symbol()    // "symbol"
```

#### Pièges

```js
typeof null        // "object" ⚠️
typeof NaN         // "number" ⚠️
typeof []          // "object"
typeof {}          // "object"
```

`null` reste une valeur primitive malgré le résultat `"object"` de `typeof`.

---

### 3. `number`

JavaScript utilise un seul type `number` pour les entiers et les nombres décimaux.

```js
42
-10
3.14
```

Valeurs particulières :

```js
Infinity
-Infinity
NaN
```

`NaN` signifie **Not-a-Number**, mais son type JavaScript est `number`.

```js
typeof NaN // "number"
NaN === NaN // false
```

---

### 4. `undefined` et `null`

#### `undefined`

Une variable déclarée sans valeur reçoit `undefined`.

```js
let age;

console.log(age); // undefined
```

Il est également possible de lui attribuer explicitement cette valeur :

```js
let name = undefined;
```

Dans les deux cas :

```js
typeof age  // "undefined"
typeof name // "undefined"
```

#### `null`

`null` représente généralement une absence intentionnelle de valeur.

```js
let user = null;
```

Attention :

```js
typeof null // "object"
```

C'est un comportement historique de JavaScript.

---

### 5. `bigint`

`bigint` permet de représenter de très grands entiers avec une précision entière.

```js
let bigNumber = 123456789012345678901234567890n;

typeof bigNumber // "bigint"
```

Les opérations doivent utiliser des `bigint` :

```js
100n + 20n // 120n
```

On ne mélange pas directement `bigint` et `number` :

```js
100n + 20 // TypeError
```

---

### 6. `symbol`

`Symbol()` crée une valeur primitive unique.

```js
const a = Symbol("id");
const b = Symbol("id");

a === b // false
```

La chaîne `"id"` est une **description**, pas la valeur du symbole.

```js
typeof a // "symbol"
```

---

### 7. Objets

Les objets sont une catégorie différente des valeurs primitives.

Exemples :

```js
{}
[]
function test() {}
```

Un tableau est un objet spécialisé :

```js
typeof [] // "object"
```

Pour vérifier spécifiquement qu'une valeur est un tableau :

```js
Array.isArray([]) // true
Array.isArray({}) // false
```

---

### 8. Références et objets

Lorsqu'une variable contient un objet, une autre variable peut référencer le même objet.

```js
let user1 = {
    name: "Alice"
};

let user2 = user1;

user2.name = "Bob";
```

Les deux variables référencent alors le même objet :

```text
user1 ──┐
        ├──→ { name: "Bob" }
user2 ──┘
```

Donc :

```js
user1.name // "Bob"
```

#### Modifier vs réaffecter

Modifier l'objet :

```js
user2.name = "Bob";
```

→ modifie l'objet partagé.

Réaffecter la variable :

```js
user2 = {
    name: "Bob"
};
```

→ `user2` référence un nouvel objet ; `user1` reste inchangé.

---

### 9. Coercition de types

La **coercition** est la conversion automatique d'une valeur vers un autre type lors de certaines opérations.

Avec `+` :

```js
"10" + 5 // "105"
```

JavaScript convertit `5` en chaîne et effectue une concaténation.

Avec `-`, `*` et `/` :

```js
"10" - 5 // 5
"10" * 5 // 50
"10" / 5 // 2
```

JavaScript convertit `"10"` en nombre.

Si la conversion en nombre échoue :

```js
"hello" - 5 // NaN
```

---

### 10. `==` et `===`

`==` peut effectuer une coercition avant la comparaison.

```js
10 == "10" // true
```

`===` compare sans coercition entre les deux opérandes et vérifie la valeur ainsi que le type.

```js
10 === "10" // false
10 === 10   // true
```

#### Bonne pratique

Privilégier généralement `===` afin d'avoir des comparaisons plus prévisibles.

---

## À retenir absolument

```text
Primitive ≠ objet

7 types primitifs :
string
number
bigint
boolean
undefined
null
symbol
```

Pièges à connaître :

```js
typeof null       // "object"
typeof NaN        // "number"
typeof []         // "object"
NaN === NaN       // false
Array.isArray([]) // true
```

Et surtout :

```text
type → détermine la nature d'une valeur

coercition → conversion automatique de type

référence → plusieurs variables peuvent référencer le même objet
```

## Tableaux

Un tableau permet de stocker plusieurs valeurs dans une même structure.

```js
const fruits = ["pomme", "banane", "orange"];
```

Les indices commencent à `0`.

```text
index :    0         1         2
           ↓         ↓         ↓
fruits : ["pomme", "banane", "orange"]
```

### `length`

Retourne le nombre d'éléments :

```js
fruits.length // 3
```

Le dernier élément se trouve à :

```js
fruits[fruits.length - 1]
```

---

### Modifier un élément

```js
fruits[1] = "mangue";
```

Le tableau devient :

```js
["pomme", "mangue", "orange"]
```

---

## Ajouter / supprimer

```text
push()     → ajoute à la fin
pop()      → supprime à la fin
unshift()  → ajoute au début
shift()    → supprime au début
```

Ces quatre méthodes **modifient le tableau original**.

```js
fruits.push("kiwi");
const dernier = fruits.pop();

fruits.unshift("mangue");
const premier = fruits.shift();
```

`pop()` et `shift()` retournent l'élément supprimé.

---

## Parcourir un tableau

### `for`

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

⚠️ Utiliser `<` et non `<=`.

Si `length === 3`, les indices valides sont :

```text
0
1
2
```

---

### `for...of`

Parcourt directement les **valeurs** :

```js
for (const fruit of fruits) {
    console.log(fruit);
}
```

---

### `for...in`

Parcourt les **indices/clés** :

```js
for (const index in fruits) {
    console.log(index);
}
```

Pour un tableau, les indices sont des chaînes :

```text
"0"
"1"
"2"
```

Pour parcourir les valeurs d'un tableau, préférer généralement `for...of`.

---

## Rechercher

### `includes()`

Vérifie si une valeur existe.

```js
fruits.includes("orange"); // true
```

Retourne un **booléen** et ne modifie pas le tableau.

---

### `indexOf()`

Retourne l'indice de la première occurrence.

```js
fruits.indexOf("orange");
```

Si la valeur n'existe pas :

```js
-1
```

⚠️ `indexOf()` ne retourne pas `undefined`.

---

### `find()`

Retourne le **premier élément** qui satisfait une condition.

```js
const nombres = [5, 12, 20];

nombres.find(n => n > 10);
// 12
```

Si aucun élément ne correspond :

```js
undefined
```

Avec des objets, `find()` retourne l'objet complet :

```js
const user = utilisateurs.find(user => user.age < 18);
```

---

### `findIndex()`

Retourne l'indice du premier élément correspondant.

```js
nombres.findIndex(n => n > 10);
```

Si aucun élément ne correspond :

```js
-1
```

---

### `some()`

Vérifie si **au moins un** élément satisfait la condition.

```js
nombres.some(n => n > 10);
```

Retourne :

```text
true / false
```

---

### `every()`

Vérifie si **tous** les éléments satisfont la condition.

```js
nombres.every(n => n > 0);
```

Retourne :

```text
true / false
```

---

## Extraire / combiner

### `slice()`

Extrait une portion **sans modifier l'original**.

```js
const nombres = [10, 20, 30, 40];

nombres.slice(1, 3);
// [20, 30]
```

⚠️ La borne de fin est **exclusive**.

---

### `splice()`

Modifie le tableau.

Permet de :

* supprimer ;
* insérer ;
* remplacer.

```js
const nombres = [10, 20, 30, 40];

nombres.splice(1, 2);
```

Le tableau devient :

```js
[10, 40]
```

---

### `concat()`

Combine des tableaux sans modifier les originaux.

```js
const a = [1, 2];
const b = [3, 4];

const resultat = a.concat(b);
// [1, 2, 3, 4]
```

---

## Transformer / filtrer

### `map()`

Transforme **chaque élément** et retourne un nouveau tableau.

```js
const nombres = [1, 2, 3];

const doubles = nombres.map(n => n * 2);

// [2, 4, 6]
```

Avec des objets :

```js
const noms = utilisateurs.map(user => user.nom);
```

---

### `filter()`

Conserve les éléments qui satisfont une condition.

```js
const majeurs = utilisateurs.filter(user => user.age >= 18);
```

Retourne un nouveau tableau.

---

### `reduce()`

Accumule les éléments pour produire une valeur.

```js
const nombres = [1, 2, 3, 4];

const somme = nombres.reduce((acc, nombre) => {
    return acc + nombre;
}, 0);
```

Résultat :

```text
10
```

Le deuxième argument (`0`) est la valeur initiale de l'accumulateur.

---

## Trier / inverser

### `sort()`

Trie le tableau et **modifie le tableau original**.

Pour les nombres, utiliser un comparateur :

```js
nombres.sort((a, b) => a - b);
```

→ ordre croissant.

```js
nombres.sort((a, b) => b - a);
```

→ ordre décroissant.

#### Comparateur

```text
résultat négatif → a avant b
résultat positif → b avant a
résultat égal    → aucune préférence
```

Avec des objets :

```js
produits.sort((a, b) => a.prix - b.prix);
```

On compare ici la propriété `prix`.

---

### `reverse()`

Inverse l'ordre du tableau.

```js
const nombres = [1, 2, 3];

nombres.reverse();

// [3, 2, 1]
```

⚠️ `reverse()` modifie également le tableau original.

---

## Mutation vs copie

Méthodes qui modifient le tableau :

```text
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

Méthodes qui ne modifient pas le tableau original :

```text
includes()
indexOf()
find()
findIndex()
some()
every()
slice()
concat()
map()
filter()
reduce()
```

---

## Spread `...`

Le spread permet de **déplier les éléments** d'un tableau.

```js
const fruits = ["pomme", "banane"];

const copie = [...fruits];
```

Il permet également de combiner des tableaux :

```js
const a = [1, 2];
const b = [3, 4];

const resultat = [...a, ...b];
// [1, 2, 3, 4]
```

Ajouter au début :

```js
const resultat = [0, ...a];
```

Ajouter à la fin :

```js
const resultat = [...a, 3];
```

#### Éviter une mutation

```js
const nombres = [5, 2, 8, 1];

const tries = [...nombres].sort((a, b) => a - b);
```

`nombres` reste inchangé.

Même principe :

```js
const inverse = [...nombres].reverse();
```

---

## Destructuration

Permet d'extraire directement les valeurs d'un tableau.

```js
const couleurs = ["rouge", "vert", "bleu"];

const [a, b, c] = couleurs;
```

Résultat :

```text
a → "rouge"
b → "vert"
c → "bleu"
```

On peut ignorer une valeur :

```js
const [a, , c] = couleurs;
```

Ici :

```text
a → "rouge"
c → "bleu"
```

---

## Mémo essentiel

```text
some()    → au moins un ?
find()    → premier correspondant
filter()  → tous les correspondants
map()     → transformer chacun
reduce()  → accumuler vers une valeur
```

#### À retenir absolument

```text
index commence à 0

dernier index = length - 1

sort() et reverse() modifient l'original

[...tableau] crée une nouvelle copie du tableau

slice() ne modifie pas l'original

splice() modifie l'original

map() transforme

filter() sélectionne

find() retourne un élément

findIndex() retourne un indice

some() et every() retournent un booléen
```
# II. Fonctions et portée

## 1. Déclaration de fonction

Une fonction permet de regrouper des instructions réutilisables.

```js
function additionner(a, b) {
    return a + b;
}
```

Une fonction est d'abord **déclarée**, puis exécutée lorsqu'elle est appelée :

```js
additionner(10, 5);
```

### Paramètres et arguments

Les noms présents dans la déclaration sont les **paramètres** :

```js
function additionner(a, b) {
    return a + b;
}
```

Les valeurs fournies lors de l'appel sont les **arguments** :

```js
additionner(10, 5);
```

Ici :

```text
a → 10
b → 5
```

### `return`

`return` permet de renvoyer une valeur :

```js
function carre(nombre) {
    return nombre ** 2;
}
```

On peut récupérer le résultat :

```js
const resultat = carre(5);

// 25
```

`return` termine également immédiatement l'exécution de la fonction.

```js
function test() {
    return 10;

    console.log("Bonjour");
}
```

Le `console.log()` ne sera jamais exécuté.

---

## 2. `return` vs `console.log()`

`console.log()` affiche une valeur.

```js
function additionner(a, b) {
    console.log(a + b);
}
```

`return` renvoie une valeur à l'appelant.

```js
function additionner(a, b) {
    return a + b;
}
```

Une fonction qui affiche une valeur avec `console.log()` ne retourne pas automatiquement cette valeur.

```js
function afficher() {
    console.log("Bonjour");
}

const resultat = afficher();

// affichage : Bonjour
// resultat : undefined
```

À retenir :

```text
console.log() → affiche
return       → renvoie une valeur
```

---

## 3. Paramètres par défaut

Un paramètre peut avoir une valeur par défaut.

```js
function additionner(a = 10, b = 5) {
    return a + b;
}
```

Si l'argument est absent ou vaut `undefined`, la valeur par défaut est utilisée.

```js
additionner();            // 15
additionner(20);          // 25
additionner(undefined, 30); // 40
```

En revanche, `null` n'active pas la valeur par défaut :

```js
additionner(null, 30);
```

Ici :

```text
a → null
b → 30
```

La valeur par défaut n'est donc pas utilisée.

---

## 4. Portée des fonctions

La portée détermine où une variable est accessible.

Les notions de portée de `let`, `const` et `var` ont déjà été étudiées dans les bases du langage.

La fonction ajoute cependant une notion importante : la **chaîne de portée**.

---

## 5. Chaîne de portée

Lorsqu'une variable est recherchée, JavaScript cherche dans :

1. la portée courante ;
2. puis la portée extérieure ;
3. puis la portée encore extérieure ;
4. jusqu'à la portée globale.

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

`interne()` peut accéder à :

```text
c → portée interne
b → portée externe
a → portée globale
```

On parle de **scope chain**.

Une fonction peut donc accéder aux variables de ses portées extérieures.

---

## 6. Closures

Une **closure** est une fonction qui conserve l'accès aux variables de sa portée extérieure, même après que la fonction extérieure a terminé son exécution.

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

On crée ensuite un compteur :

```js
const compteur = creerCompteur();
```

Puis :

```js
compteur(); // 1
compteur(); // 2
compteur(); // 3
```

Même si `creerCompteur()` a terminé son exécution, la fonction retournée conserve l'accès à `compteur`.

### Plusieurs closures

Chaque appel de `creerCompteur()` crée son propre environnement :

```js
const compteur1 = creerCompteur();
const compteur2 = creerCompteur();
```

Les deux compteurs sont indépendants :

```js
compteur1(); // 1
compteur1(); // 2

compteur2(); // 1

compteur1(); // 3
compteur2(); // 2
```

On peut représenter cela ainsi :

```text
compteur1
   ↓
{ compteur: 3 }

compteur2
   ↓
{ compteur: 2 }
```

Chaque closure conserve donc son propre état.

---

# III. Expressions de fonctions

## 1. Fonction déclarée

Une fonction peut être déclarée directement :

```js
function additionner(a, b) {
    return a + b;
}
```

## 2. Expression de fonction

Une fonction peut également être stockée dans une variable :

```js
const additionner = function(a, b) {
    return a + b;
};
```

Ici, la fonction est une **valeur** stockée dans la variable `additionner`.

Elle peut ensuite être appelée normalement :

```js
additionner(10, 5);
```

Résultat :

```text
15
```

### Différence importante

Déclaration :

```js
function additionner(a, b) {
    return a + b;
}
```

Expression :

```js
const additionner = function(a, b) {
    return a + b;
};
```

Dans l'expression, la fonction est affectée à une variable.

---

# IV. Fonctions fléchées

Les fonctions fléchées offrent une syntaxe plus courte pour écrire des fonctions.

Version classique :

```js
const doubler = function(nombre) {
    return nombre * 2;
};
```

Version fléchée :

```js
const doubler = (nombre) => {
    return nombre * 2;
};
```

Lorsqu'il n'y a qu'un seul paramètre, les parenthèses peuvent être supprimées :

```js
const doubler = nombre => {
    return nombre * 2;
};
```

Lorsqu'il n'y a qu'une seule expression retournée, on peut supprimer les accolades et `return` :

```js
const doubler = nombre => nombre * 2;
```

Ces deux écritures sont équivalentes :

```js
const doubler = nombre => nombre * 2;
```

```js
const doubler = function(nombre) {
    return nombre * 2;
};
```

### Plusieurs paramètres

Avec plusieurs paramètres, les parenthèses sont nécessaires :

```js
const additionner = (a, b) => a + b;
```

### Attention aux objets

Une fonction fléchée qui retourne directement un objet doit utiliser des parenthèses :

```js
const creerUtilisateur = nom => ({
    nom: nom
});
```

Sinon :

```js
const creerUtilisateur = nom => {
    nom: nom
};
```

les accolades sont interprétées comme le bloc de la fonction et non comme un objet retourné.

---

# V. Contexte d'exécution

Lorsqu'une fonction est appelée, JavaScript crée un **contexte d'exécution** pour cette fonction.

Ce contexte contient notamment les informations nécessaires à son exécution :

```text
paramètres
variables locales
instructions
références vers les portées accessibles
```

Exemple :

```js
let x = 10;

function test() {
    let x = 5;

    console.log(x);
}

test();
```

Lors de l'appel :

```js
test();
```

JavaScript crée un contexte d'exécution pour `test`.

Dans ce contexte :

```text
x local → 5
x global → 10
```

La variable locale est trouvée en premier.

Résultat :

```text
5
```

---

# VI. Pile d'appels

JavaScript utilise une **pile d'appels** (*call stack*) pour gérer l'exécution des fonctions.

Lorsqu'une fonction est appelée, elle est placée sur la pile.

Lorsqu'elle termine son exécution, elle est retirée.

Exemple :

```js
function A() {
    B();
}

function B() {
    C();
}

function C() {
    console.log("Bonjour");
}

A();
```

Pendant l'exécution, la pile évolue :

```text
A()
↓
A()
B()
↓
A()
B()
C()
```

Lorsque `C()` termine :

```text
A()
B()
```

Puis `B()` termine :

```text
A()
```

Puis `A()` termine :

```text
vide
```

La pile fonctionne selon le principe :

```text
LIFO
Last In, First Out
```

Autrement dit :

```text
dernier arrivé → premier sorti
```

### Exemple

```js
function A() {
    console.log("1");
    B();
    console.log("2");
}

function B() {
    console.log("3");
}

A();
```

Résultat :

```text
1
3
2
```

Pourquoi ?

Au moment où `B()` est appelée :

```text
┌─────────┐
│    B    │ ← exécutée en premier
├─────────┤
│    A    │
└─────────┘
```

`B()` est au sommet de la pile, donc elle doit terminer avant que `A()` puisse continuer.

---

# Mémo — Fonctions et portée

```text
paramètre → variable reçue par la fonction

argument → valeur fournie lors de l'appel

return → renvoie une valeur et termine la fonction

console.log() → affiche une valeur

scope chain → recherche d'une variable dans les portées extérieures

closure → fonction qui conserve l'accès à une portée extérieure

expression de fonction → fonction stockée dans une variable

fonction fléchée → syntaxe courte pour créer une fonction

contexte d'exécution → environnement créé lors de l'exécution

call stack → pile utilisée pour gérer les appels de fonctions
```

## À retenir absolument

```text
function declaration
        ↓
function additionner(a, b) { ... }

function expression
        ↓
const additionner = function(a, b) { ... };

arrow function
        ↓
const additionner = (a, b) => a + b;
```

Et pour l'exécution :

```text
appel de fonction
      ↓
création du contexte d'exécution
      ↓
fonction placée dans la call stack
      ↓
exécution
      ↓
return / fin de fonction
      ↓
fonction retirée de la call stack
```

### État actuel

Les notions suivantes sont désormais étudiées et validées :

* Déclaration de fonctions
* Paramètres et arguments
* `return`
* Paramètres par défaut
* Scope chain
* Closures
* Expressions de fonctions
* Fonctions fléchées
* Contexte d'exécution
* Pile d'appels

Les prochains sujets de cette phase sont :

* Sélection du DOM
* Événements
* Propagation des événements
* Création et parcours de nœuds
* Modification des attributs et styles
* Callbacks
* Promesses
* `async/await`
* `fetch`
* Boucle d'événements
* Gestion des erreurs
* Timers et intervalles
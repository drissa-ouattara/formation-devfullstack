// Crée un composant ListeProduits qui affiche les trois produits suivants :

// const produits = ["Ordinateur", "Clavier", "Souris"];

// Consignes :

// Utilise map() pour parcourir le tableau.
// Affiche chaque produit dans un élément <li>.
// Place les éléments <li> dans une liste <ul>.
// Ajoute une propriété key à chaque élément généré.

function ListeProduits() {
    const produits = ["Ordinateur", "Clavier", "Souris"];

    return (
        <ul>
            {produits.map((produit, index) => (
                <li key={index}> {produit} </li>
            ))}
        </ul>
    );
};

// Modifie ton composant ListeProduits pour afficher chaque produit sous cette forme :

// Ordinateur — 250000 FCFA
// Clavier — 15000 FCFA
// Souris — 5000 FCFA

// Contraintes :

// Utilise map().
// Utilise <ul> et <li>.
// Utilise produit.id comme key.
// Affiche le nom et le prix de chaque produit.

// À toi de jouer dans VS Code ! 💪

function ListeProducts() {
    const products = [
        { id: 1, nom: "Ordinateur", prix: 250000 },
        { id: 2, nom: "Clavier", prix: 15000 },
        { id: 3, nom: "Souris", prix: 5000 }
    ];

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}> {product.nom} - {product.prix} FCFA </li>
            ))}
        </ul>
    );
}


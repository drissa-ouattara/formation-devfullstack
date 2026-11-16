function Listproduits() {
   
    const products = [
        { id: 1, nom: "Ordinateur", prix: 250000 },
        { id: 2, nom: "Clavier", prix: 15000 },
        { id: 3, nom: "Souris", prix: 5000 }
    ]
    
    return (
        <ul>
            {products.map(product =>
                <li key={product.id}> {product.nom} - {product.prix} FCFA </li>
            )}
        </ul>
    );
};
export default Listproduits;
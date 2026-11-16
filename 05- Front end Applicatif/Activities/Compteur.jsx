import{useState} from "react"

function Compteur() {
    const [compteur, setCompteur] = useState(0);

    function incrementer() {
        setCompteur(n => n + 1);
    }

    function diminuer(){
        setCompteur(n => n >0 ? n - 1: 0 );
    }

    function reset(){
        setCompteur(n => n - n);
    }
    
    return (
        <div>
            <p>{compteur}</p>
            <button onClick={incrementer}>
                Augmenter de 1 
            </button> 

            <button onClick={diminuer}>
                Diminuer de 1
            </button>

            <button onClick={reset}>
                Reinitialiser
            </button>

        </div>
    );
}
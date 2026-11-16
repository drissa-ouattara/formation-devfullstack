

function Notification() {
    const nouveauMessage = true; 

    return (
        <div>
            {nouveauMessage && <p>"Vous avez un nouveau message!"</p> }
        </div>
    )
            
}
// export default Notification;


import { useState } from "react";
function Message() {
    const [visible, setVisible] = useState(false);

    function switchVisibility() {
        setVisible(n => !n);
    }

    return (
        <div>
            {visible && <p>Bienvenue</p>}

            <button onClick={switchVisibility}>
                Afficher / Masquer
            </button>
        </div>
    );
}

export default Message;
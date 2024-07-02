import { useState } from 'react';


function Collapse({ title,  content }) {

    // on met par défaut le collapse fermé
   

    // onClick, on met à jour l'état à l'inverse de ce qu'il est, soit true ou false
    // className, on détermine les classes css à mettre selon l'état de isOpen
    return (
        <div id="collapse">
            {title}
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}



export default Collapse
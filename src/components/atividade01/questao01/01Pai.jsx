import React from 'react';
import Filho from './01Filho';

const Pai = () => {
    return(
        <div>
            <h2>Os dados são: altura (1.80) e peso (90)</h2>
            <Filho altura={1.8} peso={90}/>
        </div>
    );
}

export default Pai;
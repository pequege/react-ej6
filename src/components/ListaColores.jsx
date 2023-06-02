import React from 'react';
import CardColor from './CardColor';

const ListaColores = ({listaColores, borrarColor}) => {
    return (
        <div className='row d-flex justify-content-center'>
            {listaColores.map((color, colorIndice) => <CardColor color={color} key={colorIndice} borrarColor={borrarColor}></CardColor>)}
        </div>
    );
};

export default ListaColores;
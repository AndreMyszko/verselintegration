//import React from 'react';
import {useState} from 'react';

function Home(){
    return (
        //Carregamento do HTML da página está sendo feito aqui.
        <div>
            <h1>Home Update</h1>
            <Contador />
            <p>Test</p>
            <a href="/sobre">Acessar página *SOBRE*</a>
        </div>
        
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        //Carregamento do HTML da página está sendo feito aqui.
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;
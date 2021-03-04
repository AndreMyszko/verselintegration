import Link from 'next/link';
import { useState } from 'react';

function Contar() {
    return (
        //Carregamento do HTML da página está sendo feito aqui.
        <div>

            <h1>Página Contador</h1>

            <Contador />

            <p>
                <Link href="/">
                    <a >Acessar página *HOME* aqui</a>
                </Link>
            </p>

        </div>

    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        //Carregamento do HTML da página está sendo feito aqui.
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar +1</button>
        </div>
    )
}

export default Contar;
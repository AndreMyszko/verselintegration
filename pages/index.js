//import React from 'react';
import Link from 'next/link';

//************ESSE CÓDIGO É PARA ACESSAR O BACKEND ANTES DE APRESENTAR A PÁGINA... */
// export async function getServerSideProps(context){
//     const id = context.query.id;

//     return {
//         props: {
//             id: id
//         }
//     }
// }

function Home() {
    return (
        //Carregamento do HTML da página está sendo feito aqui.
        <div>

            <h1>Página Home</h1>

            <p>
                <Link href="/sobre">
                    <a >Acessar página *SOBRE* aqui</a>
                </Link>
            </p>

            <p>
                <Link href="/tempo">
                    <a >Acessar página *TEMPO* aqui</a>
                </Link>
            </p>

            <p>
                <Link href="/contador">
                    <a >Acessar página *CONTADOR* aqui</a>
                </Link>
            </p>

        </div>

    )
}

export default Home;
import Link from 'next/link';

function Sobre(){
    return (
        //Carregamento do HTML da página está sendo feito a
        <div>

            <h1>Página Sobre</h1>

            <Link href="/">
            <a>Acessar página *HOME* aqui</a>          
            </Link>

        </div>
        
    )
}

export default Sobre;
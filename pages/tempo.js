import Link from 'next/link';

function Tempo() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return (
        <div>

            <p>{dynamicDateString}</p>
            <p>(dinâmico - tempo é atualizado a todo refresh na página!)</p>

            <p>
            <Link href="/">
                <a>Acessar página *HOME* aqui</a>
            </Link>
            </p>

        </div>

    )
}

export default Tempo;
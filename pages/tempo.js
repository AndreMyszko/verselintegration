import Link from 'next/link';

function Tempo(props) {
    //mensagem que vai para o frontend
    console.log('mensagem frontend');

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return (
        <div>

            <p>{dynamicDateString}</p>
            <p>(dinâmico - tempo é atualizado a todo refresh na página!)</p>

            <br></br>

            <p>{props.staticDateString}</p>
            <p>(estático - valor é passado por "props" do react!)</p>

            <br></br>

            <p>
                <Link href="/">
                    <a>Acessar página *HOME* aqui</a>
                </Link>
            </p>

        </div>

    )
}

export async function getStaticProps() {
    //mensagem que vai para o backend
    console.log('mensagem backend');

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 600
    }
    

}

export default Tempo;
import '../App.css'
import Imagem from './img/paisagem2.jpg'


function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-1 text-center">Bem-vindo(a) ao Nosso Espaço! 🌟</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-6">
                    <img src={Imagem} alt="" className="img1" />
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <p className='fs-3'>
                    É um imenso prazer tê-lo(a) aqui. Seja você um visitante pela primeira vez ou um amigo que retorna, queremos compartilhar nosso mundo com você.

Neste recanto virtual, você encontrará um verdadeiro tesouro de conteúdo interessante, novidades e informações valiosas. Explore à vontade, mergulhe nas páginas e descubra o que temos a oferecer.
                    </p>
                </div>
            </div>
        </div>
        
    )
}
export default Home;
import ItemServico from "./ItemServico";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { SiBisecthosting } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";


function Servico() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex">
                    <div className="col-4">
                        <ItemServico nome="Serviço Front-end" descricao="Destaque-se online com designs envolventes, navegação intuitiva e responsividade impecável. A primeira impressão do seu site nunca foi tão impactante." preco="R$2.000/Page" icon={<FaHtml5 className='display-1 text-center border w-100 d-flex justify-content-center' />} />
                    </div>
                    <div className="col-4">
                        <ItemServico nome="Serviço Back-end" descricao="Seu site merece mais do que apenas uma fachada bonita. Nosso back-end robusto garante desempenho superior, segurança e funcionalidades avançadas." preco="R$3.000/Page" icon={<IoLogoJavascript className='display-1 text-center border w-100 d-flex justify-content-center' />
                        } />

                    </div>
                    <div className="col-4">
                        <ItemServico nome="Serviço Mobile" descricao="Esteja onde seus clientes estão. Desenvolvemos aplicativos móveis intuitivos e eficientes para levar sua marca diretamente para as mãos do seu público-alvo." preco="R$5.000" icon={<FaMobileAlt className='display-1 text-center border w-100 d-flex justify-content-center' />
                        } />

                    </div>
                </div>
                <div className="col-12 d-flex mt-2">
                    <div className="col-4">
                        <ItemServico nome="Hospedagem" descricao="Proporcionamos uma hospedagem robusta e confiável para garantir que seu site esteja sempre disponível. Velocidade, segurança e suporte 24/7 para manter sua presença online impecável." preco="R$2.000/Page" icon={<SiBisecthosting className='display-1 text-center border w-100 d-flex justify-content-center' />} />
                    </div>
                    <div className="col-4">
                        <ItemServico nome="Wordpress" descricao="Transforme sua visão em realidade com o WordPress. Nossa equipe especializada simplifica o desenvolvimento e a manutenção, permitindo que você foque no que realmente importa" preco="R$3.000/Page" icon={<FaWordpress className='display-1 text-center border w-100 d-flex justify-content-center' />
                        } />

                    </div>
                    <div className="col-4">
                        <ItemServico nome="Marketing" descricao="Maximize seu alcance online com nossas estratégias de marketing digital. Desde SEO até campanhas direcionadas, ajudamos a impulsionar sua visibilidade e converter visitantes em clientes." preco="R$5.000" icon={<SiGooglemarketingplatform className='display-1 text-center border w-100 d-flex justify-content-center' />
                        } />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servico;
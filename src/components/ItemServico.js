import propTypes from 'prop-types';
import { FaHtml5 } from "react-icons/fa";


function ItemServico({nome, preco , descricao,icon}) {
    return (
        <div>
        <div className="card" style={{ width: '18rem' }}>
       {icon}
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">{descricao}</p>
        <p className="card-text">Preço {preco}</p>
        <a href="#" className="btn btn-primary text-center border d-flex justify-content-center">Comprar</a>
      </div>
    </div>
        </div>
    )
}

export default ItemServico;
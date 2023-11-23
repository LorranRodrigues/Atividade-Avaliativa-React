function ItemFormulario({name,name2,name3,label,label2,label3,ph,ph2,ph3,type,type2}) {
    return (
        <div className="container p-5">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-12 w-75" id="text-shadow">
                    <p className="display-1 text-center fw-bold" style={{ color: '#0097F6', fontFamily: 'Roboto Condensed, sans-serif' }}>
                        Me envie uma mensagem
                    </p>
                    <p className="text-center fs-4 fw-bold" style={{ color: '#0097F6', fontFamily: 'Roboto Condensed, sans-serif' }}>
                        Tem uma pergunta ou uma proposta? ou você apenas quer dizer olá, Ok vai em frente
                    </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <form className="col-12 w-75 d-flex text-md-center flex-wrap" action="">
                    <div className="col-md-6 col-12">
                        <label htmlFor={name} className="w-50 text-start ps-4">{label}</label><br />
                        <input className="p-2 border-0 border-bottom" id={name} name={name} type={type} placeholder={ph} />
                    </div>
                    <div className="col-md-6 col-12">
                        <label htmlFor={name2} className="w-50 text-start ps-4">{label2}</label><br />
                        <input className="p-2 border-0 border-bottom" id={name2} name={name2} type={type2} placeholder={ph2} />
                    </div>
                    <div className="mt-5 col-12 d-block mx-md-auto w-75">
                        <label htmlFor={name3} className="w-100 text-start ps-md-4">{label3}</label><br />
                        <textarea className="p-2 border-0 border-bottom" name={name3} id={name3} cols="88" rows="1" placeholder={ph3}></textarea><br />
                        <button type="button" id="botao" className="mt-5 btn border w-75 btn-lg">ENVIAR →</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ItemFormulario;
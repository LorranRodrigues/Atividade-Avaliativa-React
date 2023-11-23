import ItemFormulario from "./ItemFormulario";

function Contato() {
    return (
        
        <div className="mt-5">
            <ItemFormulario name="nome" name2="email" name3="area" label="Nome" label2="E-mail" label3="Sua mensagem"  ph="Digite seu nome" ph2="exemplo@gmail.com" ph3="Olá,nós precisamos de um design para um sistema de banco, Espero que você responda isso!" type="text" type2="email" />
        </div>
    )
}
export default Contato;
import '../App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TbBrandCashapp } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import Home from './Home';
import Sobre from './Sobre';
import Contato from './Contato';
import Servico from './Servico';
function Rotas() {
    return (
        <div>
            <BrowserRouter>
        <ul style={{ listStyle: "none" }} className='d-flex gap-5 justify-content-center border p-5 bg-black text-white' >
          <li className='fs-5' ><Link className='text-decoration-none text-white' to="/"> <FaHome />
            Home</Link></li>
          <li className='fs-5'><Link className='text-decoration-none text-white' to="/sobre" > <IoMdContact />
            Sobre</Link></li>
          <li className='fs-5'><Link className='text-decoration-none text-white' to="/serviços" > <TbBrandCashapp />
            Serviços</Link></li>
          <li className='fs-5'><Link className='text-decoration-none text-white' to="/contato" > <IoMail />
            Contato</Link></li>
        </ul>

        {/* // Aqui irá aparecer o componente da rota // */}


        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/serviços" element={<Servico />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
        </Routes>
      </BrowserRouter>
        </div>
    )
}

export default Rotas;
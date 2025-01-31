import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

import FormularioPostagem from "../formularioPostagem/FormularioPostagem";

import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={<button className='border rounded px-4 hover:bg-white hover:text-amber-800'>Nova Postagem</button>} modal>
                <div>
                    <FormularioPostagem />
                </div>
            </Popup>
        </>
    );
}

export default ModalPostagem;
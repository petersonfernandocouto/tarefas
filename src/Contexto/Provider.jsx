import Contexto from "./Context";
import { useState } from "react";

import PropTypes from "prop-types"; // estava dando erro na props de Provider e então eu instalei ("import PropTypes from "prop-types";") no terminal, isso ajuda a retirar o erro e consegue evitar problemas no futuro

function Provider( {children} ) {


    const [ missao, setMissao ] = useState([])
    const [ itemToDelete, setItemToDelete ] = useState(null); //As vezes missao pode ter mais de um item, então aqui ele está fazendo a contagem
    const [ showDelete, setshowDelete ] = useState(false) // Botão de Delete
    const [ showEdit, setshowEdit ] = useState(false) // Botão de Editar
    const [ closeUL, setcloseUL ] = useState(true)
    const [ noCheck, setnoCheck ] = useState(true) //mudança de icon
    const [ YesCheck, setYesCheck ] = useState(true) //mudança de icon
    

    const informacaoDigitada = {

        missao,
        setMissao,

        showDelete, 
        setshowDelete,

        closeUL, 
        setcloseUL,

        itemToDelete, 
        setItemToDelete,

        noCheck, 
        setnoCheck,

        YesCheck, 
        setYesCheck,

        showEdit, 
        setshowEdit,

        
    }


    return (

        <Contexto.Provider value={informacaoDigitada}>

            {children}

        </Contexto.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
  }; // este codigo ajuda a retirar o erro da props do provider.Explicação está em um dos import's no inicio deste arquivo


export default Provider
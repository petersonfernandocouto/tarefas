import './index.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../../Contexto/Context';


function Edit() {

    const {   missao, setMissao, setshowEdit, setcloseUL, itemToDelete } = useContext(Contexto)

    const Sim = () => {

        setMissao(missao.filter(item => item !== itemToDelete));
        setshowEdit(false);
        setcloseUL(true);
        alert('(Atenção!) Item deletado, Reescreva a Tarefa')
    }

    const Nao = () => {
        setshowEdit(false);
        setcloseUL(true);
    }

    return (

        <div className='Conteudo'>

            <div className='Pergunta'>
                
                <h2>Deseja Editar esse item?</h2>

                <h3>{itemToDelete}.</h3>


                <div className='YesorNot'>

                        <Link to={"/Tarefas"} className='ButtonLink'>

                            <button onClick={Nao}>
                                Não
                            </button>
                
                
                        </Link>
                        

                        <Link to={"/"} className='ButtonLink'> 

                            <button onClick={Sim}>
                                Sim
                            </button>
                        
                        </Link>
                        

                </div>
                
                
            </div>

        </div>
    );
}

export default Edit;
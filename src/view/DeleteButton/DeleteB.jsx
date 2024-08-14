import './index.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../../Contexto/Context';

function DeleteButton() {

    const { setMissao, setshowDelete, setcloseUL, itemToDelete } = useContext(Contexto);

    const Sim = () => {
        setMissao(prevMissao => prevMissao.filter(item => item !== itemToDelete));
        setshowDelete(false);
        setcloseUL(true);
        alert('Tarefa Deletada');
    };

    const Nao = () => {
        setshowDelete(false);
        setcloseUL(true);
    };

    return (

        <div className='Conteudo'>

            <div className='Pergunta'>

                <h2>Deseja excluir essa tarefa?</h2>
                <h3>{itemToDelete}.</h3>

                <div className='YesorNot'>
                    
                    <Link to={"/Tarefas"} className='ButtonLink'>

                        <button onClick={Nao}>
                            Não
                        </button>

                    </Link>

                    <Link to={"/Tarefas"} className='ButtonLink'>

                        <button onClick={Sim}>

                            Sim

                        </button>

                    </Link>
                    
                </div>

            </div>


        </div>
    );
}

export default DeleteButton;

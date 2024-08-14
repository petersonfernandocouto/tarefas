import './index.scss';
import { FaCheck } from "react-icons/fa";
import { useContext, useState } from 'react';
import Contexto from '../../Contexto/Context';
import Menu from '../Menu/Menu';

function Organizacao() {
    const { missao, setMissao } = useContext(Contexto);
    const [novaMissao, setNovaMissao] = useState("");

    function checagem(event) {
        event.preventDefault(); 

        if (novaMissao.trim() === "") {  // Verifica se o input está vazio ou contém apenas espaços(trim) em branco
            alert("Nenhuma tarefa encontrada! Digite algo no campo");
            return;
        }


        setMissao([...missao, novaMissao]);
        setNovaMissao(""); 
        console.log(missao)
    }

    return (

        <div>

            <Menu />

            <div className='Home'>

                <h1>Digite Sua Tarefa</h1>

                <form className='formulario' onSubmit={checagem}>
                    <input 
                        placeholder='Minha tarefa é ...' 
                        value={novaMissao} 
                        onChange={(e) => setNovaMissao(e.target.value)}
                    />

                    <button
                        type='submit'
                        className='ButtonSearch'
                    >
                        <FaCheck />
                    </button>

                </form>

            </div>

            <div className='Informacao'>

                <div className='Util'>

                    <h1>Como Utilizar ?</h1>

                    <h4>Basta digitar sua tarefa e clicar no ícone de check ou Enter no teclado.<br />  Em seguida, clique em Tarefas no menu superior <br /> para visualizar seus objetivos. A partir daí, você poderá <br />manipulá-las, incluindo opções para deletar, marcar <br /> como concluída ou editá-las.</h4>

                </div>


                <div className='Util'>

                    <h1>Como Visualizar minhas Tarefas ?</h1>

                    <h4>No menu superior à esquerda, você verá a opção |Tarefas|. Nesta página, você pode visualizar tudo o que foi digitado.</h4>



                </div>

            </div>

        </div>
    );
}

export default Organizacao;

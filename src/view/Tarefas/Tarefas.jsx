import './index.scss';
import Menu from '../Menu/Menu';
import { useContext, useState } from 'react'; 
import Contexto from '../../Contexto/Context';
import DeleteButton from '../DeleteButton/DeleteB';
import Edit from '../EditButton/Edit';
import { Link } from 'react-router-dom';
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md"; //no check
import { RiPencilFill } from "react-icons/ri"; // Pencil
import { MdDelete } from "react-icons/md"; // Delete
import { MdAdd } from "react-icons/md";


function Tarefas() {

    const { missao, showDelete, setshowDelete, closeUL, setcloseUL, setItemToDelete, showEdit, 
        setshowEdit, } = useContext(Contexto);

    const [noCheckStates, setNoCheckStates] = useState(Array(missao.length).fill(true));

    const Deletado = (item) => {
        setshowDelete(true)
        setcloseUL(false)
        setItemToDelete(item);
    } //Verifique o onClick desta logica, ele tambem deve conter em sua (props) o "item"


    const Editar = (item) => {
        setshowEdit(true)
        setcloseUL(false)
        setItemToDelete(item);
    } 


    const Nao = (index) => {
        setNoCheckStates(prevStates =>
            prevStates.map((state, i) => (i === index ? false : state))
        );
    };

    const Sim = (index) => {
        setNoCheckStates(prevStates =>
            prevStates.map((state, i) => (i === index ? true : state))
        );
    };

    



    return (
        <>
            <Menu />

            <div className='Tarefas'>

                <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
 
                <div className='Status'>

                    <h3>Tarefas</h3>
                    <h3>Status</h3>
                    <h3>Opções</h3>

                </div>


                <div className='Linha'></div>

                {closeUL && (

                    <ul className='Lista'>

                    {missao.map((item, index) => (
                        
                        <li key={index}>

                            <h4>{item}</h4>

                            <button>
                                    {noCheckStates[index] ? (
                                        <MdCheckBoxOutlineBlank onClick={() => Nao(index)} />
                                    ) : (
                                        <IoIosCheckboxOutline onClick={() => Sim(index)} />
                                    )}
                            </button> 


                            <div className='Reformulacao'>

                                <Link onClick={() => Editar(item)} >   
                                    <button>
                                        <RiPencilFill />
                                    </button>
                                </Link>

                                  
                                    <button onClick={() => Deletado(item)}>

                                        <MdDelete />

                                    </button>
                                

                            </div>

                        </li>

                    ))}
                </ul>

                )}


                    


                {showDelete && (
                    <DeleteButton                                                
                    />
                )} {/*Deletar */}


                {showEdit && (
                    <Edit                                                
                    />
                )} {/*Botão de editar */}


            </div>

            <div className='NewMission'>

                
                

                        <h4>Nova Tarefa...</h4>

                        <Link to={"/"} className='NovaTarefa'> 
                            
                            <MdAdd/>
            
                        </Link>
                    
                    
            </div>

        </>
    );
}

export default Tarefas;

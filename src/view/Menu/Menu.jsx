import { Link } from 'react-router-dom'
import './index.scss'

function Menu() {

    return (

        <div className='Menu'>

            <Link to={"/"} >   

                    <button>
                            Organização
                    </button>

            </Link>


            <Link to={'/Tarefas'} >   

                    <button>
                            Tarefas
                    </button>

            </Link>

        </div>
    )
}

export default Menu
import './App.css'
import { Link } from 'react-router-dom'


function Nav() {
    return (


        <nav>
         
            <ul className='Nav-links'>

                <Link to='/Dine'>
                    <li>Dine</li>
                </Link>
                <Link to='/Kitchen'>
                    <li>Kitchen</li>
                </Link>

                <Link to='/Cocktails'>
                    <li>Cocktails</li>
                </Link>
              

              

            </ul>
        </nav>


    )
}
export default Nav;
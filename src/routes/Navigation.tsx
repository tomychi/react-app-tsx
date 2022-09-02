import { BrowserRouter, Navigate} from "react-router-dom";
import { Route, Routes, NavLink} from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import logo from '../logo.svg';

export const Navigation = () => {
    return (

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt=" React Logo" />

                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={ ( {isActive} )=> isActive ? 'nav-active' : '' } >Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/lazy2" className={ ( {isActive} )=> isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>


                        <li>
                            <NavLink to="/lazy3" className={ ( {isActive} )=> isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>

                        
                        
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<ShoppingPage /> } />
                    <Route path="lazy2" element={<h1>Componente About</h1>} />
                    <Route path="lazy3" element={<h1>Componente Users</h1>} />

                    <Route path="/*" element={ <Navigate to={"/lazy1"} replace /> } />
                </Routes>



            </div> 
        </BrowserRouter>


    );
}
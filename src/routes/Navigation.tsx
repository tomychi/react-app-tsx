import { Suspense } from "react";
import {BrowserRouter,Navigate,  Route, Routes, NavLink} from "react-router-dom";
import { routes } from "./routes";

import logo from "../logo.svg";


// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'


export const Navigation = () => {
    return (
        // para esperar a carga de todos los componentes antes de renderizarlos
        <Suspense fallback={ <span>Loading...</span> }  > 
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt=" React Logo" />

                        <ul>
                            {/*  navlink dinamicos */}
                            {
                                routes.map(({to, name},) => (
                                    <li key={to}>
                                    <NavLink 
                                        to={to} 
                                        className={ ( {isActive} )=> isActive ? 'nav-active' : '' } 
                                        >
                                        {name}
                                    </NavLink>
                                </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                            {
                                routes.map(({path, Component},) => (
                                    <Route 
                                    key={path}
                                    path={path} 
                                        element={ <Component /> } 
                                        />
                                        ))  
                                    }
                        
                        <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                    </Routes>
                </div> 
            </BrowserRouter>
        </Suspense>


    );
}
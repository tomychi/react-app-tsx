import { BrowserRouter, Navigate} from "react-router-dom";
import { Route, Routes, NavLink} from "react-router-dom";

import {
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYUpPage,
    RegisterPage,
} from "../03-forms/pages"

import logo from '../logo.svg';

export const Navigation = () => {
    return (

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt=" React Logo" />

                    <ul>
                        <li>
                            <NavLink to="/register" className={ ( {isActive} )=> isActive ? 'nav-active' : '' } >Register Page</NavLink>
                        </li>

                        <li>
                            <NavLink to="/formik-basic" className={ ( {isActive} )=> isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>

                        <li>
                            <NavLink to="/formik-yup" className={ ( {isActive} )=> isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>

                        <li>
                            <NavLink to="/formik-components" className={ ( {isActive} )=> isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>

                        <li>
                            <NavLink to="/formik-abstractions" className={ ( {isActive} )=> isActive ? 'nav-active' : '' }>Formik Abstractions</NavLink>
                        </li>


                        <li>
                            <NavLink to="/lazy3" className={ ( {isActive} )=> isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>

                        
                        
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYUpPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="formik-abstractions" element={<FormikAbstraction />} />
                    <Route path="lazy3" element={<h1>Componente Users</h1>} />

                    <Route path="/*" element={ <Navigate to={"/lazy3"} replace /> } />
                </Routes>



            </div> 
        </BrowserRouter>


    );
}
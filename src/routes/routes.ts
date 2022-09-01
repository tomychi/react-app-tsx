import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";


type JSXComponent = ()=> JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent; // para subir contenido estatico o dinamico (lazy)
    name: string;
}

 // comentar reenombra el chunk
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../01-lazyload/layout/LazyLayout"));


export const routes: Route[] = [
    {
        to: '/lazyload', //=> eliminar el / del final para que el navlink detecte la ruta activa
        path: 'lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]
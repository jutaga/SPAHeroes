import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { HeroesApp } from '../HeroesApp'
import { Marvel, DC, Hero, Buscar } from '../heroes'
import { Login } from '../auth'


const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            {
                path: '/marvel',
                element: <Marvel />
            },
            {
                path: '/dc',
                element: <DC />
            },
            {
                path: '/buscar',
                element: <Buscar />
            },
            {
                path: '/hero/:heroId',
                element: <Hero />
            },

            {
                path: '*',
                element: <Navigate to={'/marvel'} />
            }
        ],
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: '*',
        element: <Navigate to={'/dc'} />
    }
])


export const AppRouter = () => {
    return (

        <RouterProvider router={router} />

    )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar.tsx'
import Contact from './routes/Contact.tsx'
import { Footer } from './components/Footer.tsx'
import About from './routes/About.tsx'
import NotFound from './routes/error/NotFound.tsx'
import Legal from './routes/Legal.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/legal',
        element: <Legal />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
    </StrictMode>,
)

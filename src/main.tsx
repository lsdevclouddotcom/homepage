import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar.tsx'
import Contact from './routes/Contact.tsx'
import { Footer } from './components/Footer.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/contact',
        element: <Contact />
    }
])
document.title = "LSDevCloud.com";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
    </StrictMode>,
)

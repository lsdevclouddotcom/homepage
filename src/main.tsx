import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './routes/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Navbar />
        <RouterProvider router={router} />
    </StrictMode>,
)

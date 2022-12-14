/* // --------- IMPORTS ----------- */

import './App.css';

import PaginaBuscador from './paginas/PaginaBuscadorNoticias';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Error404 from './components/Errores/404'

import {
  createBrowserRouter,
  RouterProvider,
  /* Route */
} from 'react-router-dom';

// ---------- SCRIPT ---------

//// ----Router----------------
const router = createBrowserRouter([
  {
    path: '/',
    element: <PaginaBuscador />,
    errorElement: <Error404 />,
  },
  {
    path: '/buscador',
    element: <PaginaBuscador />,
  },

  /* Prueba de error 404 */
  {
    path:'/err',
    element: <Error404 />
  }
  
]);

//// ----END - Router----------------


function App() {
  return (
      <main className='bg-img'>
        <Header />
        <main>
        <RouterProvider router={router} />
        <div className='relleno'></div>
        </main>  
        <Footer></Footer>  
      </main>
      
  );
}

export default App;

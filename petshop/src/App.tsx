import { Home } from './pages/home';
import { Details } from './pages/details';
import { Cart } from './pages/cart';
import { NotFound } from './pages/notfound';
import { Layout } from './components/layout';
import { createBrowserRouter } from 'react-router';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/details/:id",
        element: <Details/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

export { router };
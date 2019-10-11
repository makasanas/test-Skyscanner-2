import { Route } from 'react-router-dom';
import Home from '../views/Home';
import Products from '../views/Products/Products';
import ProductDetails from '../views/Products/ProductDetails';
import Cart from '../views/Cart/Cart';

export default [
  {
    type: Route,
    path: ['/'],
    component: Home,
    exact: true,
  },
  {
    type: Route,
    path: ['/products'],
    component: Products,
    exact: true,
  },
  {
    type: Route,
    path: ['/products/:productId'],
    component: ProductDetails,
    exact: true,
  },
  {
    type: Route,
    path: ['/cart'],
    component: Cart,
    exact: true,
  },
];

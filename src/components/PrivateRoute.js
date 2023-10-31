import {Navigate, Outlet} from 'react-router-dom';
import { useAuth } from '../firebase/firebaseAuth';

const PrivateRoute = () => {
  const { user } = useAuth();

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to home page
  return user ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
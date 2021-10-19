import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Landing/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Landing/Services/Services/Services';
import Doctors from './Pages/Landing/Doctors/Doctors/Doctors';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Login from './Pages/User/Login/Login';
import Register from './Pages/User/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import DoctorDetails from './Pages/Details/DoctorDetails/DoctorDetails';
import PrivateRoute from './Pages/User/PrivateRoute/PrivateRoute';
import Products from './Pages/Landing/Shop/Products/Products';
import ProductDetails from './Pages/Details/ProductDetails/ProductDetails';
import ServiceDetails from './Pages/Details/ServiceDetails/ServiceDetails';

function App() {

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/services/:srvId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute exact path="/doctors/:docId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="/shop">
              <Products></Products>
            </Route>
            <PrivateRoute path="/products/:pdId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

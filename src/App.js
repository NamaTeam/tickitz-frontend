import './App.css';
import {
  BrowserRouter as Router, //router atau jalan ke arah mana
  Switch, // cabang antar halaman
  Route,
} from "react-router-dom";
import { Login, Register, VerifyRegister, UserForgotPassword, UserVerifyForgotPassword, UserUpdatePassword } from './pages/Auth'
import Dashboard from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { MovieDetail } from './pages/MovieDetail'
import { MovieList } from './pages/MovieList'
import NotFound from './pages/NotFound'
import { PrivateRoute, PublicRoute } from "./components";
import { Provider } from 'react-redux'
import configureStore from './Redux/store'
import { PersistGate } from "redux-persist/integration/react";
import Order from './pages/Order';

const { store, persistor } = configureStore()
function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* Public Route */}
        <Route path="/" exact={true} component={()=><Dashboard />} />
        <Route path="/movie-detail" exact={true} component={()=><MovieDetail />} />
        <PublicRoute path="/login" restricted ={true} exact={true} component={()=><Login />} />
        <PublicRoute path="/register" restricted ={true} exact={true} component={()=><Register />} />
        <PublicRoute path="/register/verify" restricted = {true} exact={true} component={()=><VerifyRegister/>} />
        <PublicRoute path="/forgot-password" restricted ={true} exact={true} component={()=><UserForgotPassword />} />
        <PublicRoute path="/forgot-password/verify" restricted = {true} exact={true} component={()=><UserVerifyForgotPassword/>} />
        <PublicRoute path="/update-password/:id" restricted = {true} exact={true} component={()=><UserUpdatePassword/>} />
        
        {/* Private Route */}
        <PrivateRoute path="/profile" exact={true} component={()=><Profile />} />
        <PrivateRoute path="/movie" exact={true} component={()=><MovieList />} />
        <PrivateRoute path='/order' exact={true} component={() => <Order />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  )
}

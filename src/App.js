import './App.css';
import {
  BrowserRouter as Router, //router atau jalan ke arah mana
  Switch, // cabang antar halaman
  Route,
} from "react-router-dom";
import { Login, Register, VerifyRegister, UserForgotPassword, UserVerifyForgotPassword, UserUpdatePassword } from './pages/Auth'
<<<<<<< HEAD
import { DashboardAdmin } from './pages/Admin'
=======
import { DashboardAdmin, MoviesAdmin} from './pages/Admin'
>>>>>>> 6fd8b97171fc3802a40d015147eb5f65aa41e431
import Dashboard from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { MovieDetail } from './pages/MovieDetail'
import { MovieList } from './pages/MovieList'
import { Payment } from './pages/Payment'
import { TicketResult } from './pages/TicketResult'
import NotFound from './pages/NotFound'
import { PrivateRoute, PublicRoute } from "./components";
import { Provider } from 'react-redux'
import configureStore from './Redux/store'
import { PersistGate } from "redux-persist/integration/react";
import Order from './pages/Order';
import { useSelector } from 'react-redux'

const { store, persistor } = configureStore()
function AppRouter() {
  const { data } = useSelector((state) => state.UserLogin)
  const roles = data.data?.role ?? "";
  if (roles === 'user') {
    return (
      <Router>
        <Switch>
          {/* Public Route */}
<<<<<<< HEAD
          <Route path="/" exact={true} component={() => <Dashboard />} />
          <Route path="/movie-detail" exact={true} component={() => <MovieDetail />} />
          <PublicRoute path="/login" restricted={true} exact={true} component={() => <Login />} />
          <PublicRoute path="/register" restricted={true} exact={true} component={() => <Register />} />
          <PublicRoute path="/register/verify" restricted={true} exact={true} component={() => <VerifyRegister />} />
          <PublicRoute path="/forgot-password" restricted={true} exact={true} component={() => <UserForgotPassword />} />
          <PublicRoute path="/forgot-password/verify" restricted={true} exact={true} component={() => <UserVerifyForgotPassword />} />
          <PublicRoute path="/update-password/:id" restricted={true} exact={true} component={() => <UserUpdatePassword />} />

          {/* Private Route User */}
          <PrivateRoute path="/profile" exact={true} component={() => <Profile />} />
          <PrivateRoute path="/movie" exact={true} component={() => <MovieList />} />
          <PrivateRoute path="/payment" exact={true} component={() => <Payment />} />
=======
          <Route path="/movie" exact={true} component={()=><MovieList />} />  
          <Route path="/" exact={true} component={()=><Dashboard />} />
          <Route path="/movie-detail" exact={true} component={()=><MovieDetail />} />
          <PublicRoute path="/login" restricted ={true} exact={true} component={()=><Login />} />
          <PublicRoute path="/register" restricted ={true} exact={true} component={()=><Register />} />
          <PublicRoute path="/register/verify" restricted = {true} exact={true} component={()=><VerifyRegister/>} />
          <PublicRoute path="/forgot-password" restricted ={true} exact={true} component={()=><UserForgotPassword />} />
          <PublicRoute path="/forgot-password/verify" restricted = {true} exact={true} component={()=><UserVerifyForgotPassword/>} />
          <PublicRoute path="/update-password/:id" restricted = {true} exact={true} component={()=><UserUpdatePassword/>} />
          
          {/* Private Route User */}
          <PrivateRoute path="/profile" exact={true} component={()=><Profile />} />
          <PrivateRoute path="/payment" exact={true} component={()=><Payment />} />
          <PrivateRoute path="/payment" exact={true} component={()=><TicketResult />} />
>>>>>>> 6fd8b97171fc3802a40d015147eb5f65aa41e431
          <PrivateRoute path='/order' exact={true} component={() => <Order />} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  } else if (roles === 'admin') {
    return (
      <Router>
        <Switch>
          {/* Public Route */}
<<<<<<< HEAD
          <Route path="/" exact={true} component={() => <Dashboard />} />
          <Route path="/movie-detail" exact={true} component={() => <MovieDetail />} />
          <PublicRoute path="/login" restricted={true} exact={true} component={() => <Login />} />
          <PublicRoute path="/register" restricted={true} exact={true} component={() => <Register />} />
          <PublicRoute path="/register/verify" restricted={true} exact={true} component={() => <VerifyRegister />} />
          <PublicRoute path="/forgot-password" restricted={true} exact={true} component={() => <UserForgotPassword />} />
          <PublicRoute path="/forgot-password/verify" restricted={true} exact={true} component={() => <UserVerifyForgotPassword />} />
          <PublicRoute path="/update-password/:id" restricted={true} exact={true} component={() => <UserUpdatePassword />} />

          {/* Private Route User */}
          <PrivateRoute path="/profile" exact={true} component={() => <Profile />} />
          <PrivateRoute path="/movie" exact={true} component={() => <MovieList />} />
          {/* Private Route Admin */}
          <PrivateRoute path="/admin" exact={false} component={() => <DashboardAdmin />} />
=======
          <Route path="/" exact={true} component={()=><Dashboard />} />
          <Route path="/movie" exact={true} component={()=><MovieList />} />   
          <Route path="/movie-detail" exact={true} component={()=><MovieDetail />} />
          <PublicRoute path="/login" restricted ={true} exact={true} component={()=><Login />} />
          <PublicRoute path="/register" restricted ={true} exact={true} component={()=><Register />} />
          <PublicRoute path="/register/verify" restricted = {true} exact={true} component={()=><VerifyRegister/>} />
          <PublicRoute path="/forgot-password" restricted ={true} exact={true} component={()=><UserForgotPassword />} />
          <PublicRoute path="/forgot-password/verify" restricted = {true} exact={true} component={()=><UserVerifyForgotPassword/>} />
          <PublicRoute path="/update-password/:id" restricted = {true} exact={true} component={()=><UserUpdatePassword/>} />
          
          {/* Private Route User */}
          <PrivateRoute path="/profile" exact={true} component={()=><Profile />} />       
          {/* Private Route Admin */}
          <PrivateRoute path="/admin" exact={false} component={()=><DashboardAdmin />} />
          <PrivateRoute path="/movies-admin" exact={false} component={()=><MoviesAdmin />} />
>>>>>>> 6fd8b97171fc3802a40d015147eb5f65aa41e431
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          {/* Public Route */}
<<<<<<< HEAD
          <Route path="/" exact={true} component={() => <Dashboard />} />
          <Route path="/movie-detail" exact={true} component={() => <MovieDetail />} />
          <PublicRoute path="/login" restricted={true} exact={true} component={() => <Login />} />
          <PublicRoute path="/register" restricted={true} exact={true} component={() => <Register />} />
          <PublicRoute path="/register/verify" restricted={true} exact={true} component={() => <VerifyRegister />} />
          <PublicRoute path="/forgot-password" restricted={true} exact={true} component={() => <UserForgotPassword />} />
          <PublicRoute path="/forgot-password/verify" restricted={true} exact={true} component={() => <UserVerifyForgotPassword />} />
          <PublicRoute path="/update-password/:id" restricted={true} exact={true} component={() => <UserUpdatePassword />} />
=======
          <Route path="/" exact={true} component={()=><Dashboard />} />
          <Route path="/movie" exact={true} component={()=><MovieList />} />  
          <Route path="/movie-detail" exact={true} component={()=><MovieDetail />} />
          <PublicRoute path="/login" restricted ={true} exact={true} component={()=><Login />} />
          <PublicRoute path="/register" restricted ={true} exact={true} component={()=><Register />} />
          <PublicRoute path="/register/verify" restricted = {true} exact={true} component={()=><VerifyRegister/>} />
          <PublicRoute path="/forgot-password" restricted ={true} exact={true} component={()=><UserForgotPassword />} />
          <PublicRoute path="/forgot-password/verify" restricted = {true} exact={true} component={()=><UserVerifyForgotPassword/>} />
          <PublicRoute path="/update-password/:id" restricted = {true} exact={true} component={()=><UserUpdatePassword/>} />
>>>>>>> 6fd8b97171fc3802a40d015147eb5f65aa41e431
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
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

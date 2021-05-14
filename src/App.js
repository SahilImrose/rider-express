import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home, { Vehicle } from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useContext, useState } from 'react';
import PrivateRoute from './Components/Private/PrivateRoute';
import DetailCar from './Components/Detail/DetailCar';
import DetailBus from './Components/Detail/DetailBus';
import DetailTrain from './Components/Detail/DetailTrain';
import DetailBike from './Components/Detail/DetailBike';
import NotFound from './Components/NotFound/NotFound';
import MyLocation from './Components/MyLocation/MyLocation';
export const UserContext = createContext();
function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/location"><MyLocation></MyLocation></Route>
          <PrivateRoute path="/destination/1"><DetailCar></DetailCar></PrivateRoute>
          <PrivateRoute path="/destination/2"><DetailBike></DetailBike></PrivateRoute>
          <PrivateRoute path="/destination/3"><DetailBus></DetailBus></PrivateRoute>
          <PrivateRoute path="/destination/4"><DetailTrain></DetailTrain></PrivateRoute>
          <Route path="/login"><Login></Login></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

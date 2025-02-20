import './style.css'
import Navigo from 'navigo';

import Home from './page/Home';
import Register from './page/Register';
import Login from './page/Login';
import manageTask from './page/manageTask';

import render from './utils/render';
import afterHome from './features/afterHome';
import afterRegister from './features/afterRegister';
import afterLogin from './features/afterLogin';
import afterTask from './features/afterTask';

export const router = new Navigo("/");



router.on({
  "/":() =>  render(Home, null, afterHome),
  "/register": () => render(Register, null, afterRegister),
  "/login": () => render(Login, null, afterLogin),
  "/task":() => render(manageTask, null, afterTask),
});




router.resolve();

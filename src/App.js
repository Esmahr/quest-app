
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/users/:userId' Component={User}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

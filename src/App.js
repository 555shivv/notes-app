import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <Alert message="this is amzaing"/>
      <div className="container">
      
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
      </Routes>
      </div>
</BrowserRouter>
</NoteState>
    </>
  );
}

export default App;

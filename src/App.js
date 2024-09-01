import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import GlobalStyle from './globalStyles';
import { useTheme } from './context/ThemeContext'
import { lightTheme, darkTheme } from './Themes';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const { darkMode } = useTheme();
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
    <GlobalStyle />
    <NoteState>
    <BrowserRouter>
      <Navbar/>
      <div className="container">
      
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/login" element={<Login/>} ></Route>
        <Route exact path="/signup" element={<Signup/>} ></Route>
      </Routes>
      </div>
</BrowserRouter>
</NoteState>
    </StyledThemeProvider>
  );
}

export default App;

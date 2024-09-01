import React,{useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  background: '#fff',
  color: '#000',
};

const darkTheme = {
  background: '#333',
  color: '#fff',
};

const NavbarWrapper = styled.nav`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Navbar = () => {
    const location = useLocation();
    const { darkMode, toggleDarkMode } = useTheme();
    const theme = darkMode ? darkTheme : lightTheme;
    useEffect(() => {
        document.title = location.pathname;
        }, [location]);

  return (
    <StyledThemeProvider theme={theme}>
  
    
      <NavbarWrapper className='bg-primary mb-1'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active" :""}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Login"?"active":""}`} aria-current="page" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Signup"?"active":""}`} aria-current="page" to="/Signup">Signup</Link>
        </li>
        <li>
        <ToggleButton onClick={toggleDarkMode} className="ml-auto">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </ToggleButton>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</NavbarWrapper>
    </StyledThemeProvider>
  )
}

export default Navbar

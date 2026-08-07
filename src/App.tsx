import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from './ColorModeContext';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import HomeContainer from './components/HomePage/HomeContainer';
import Resume from './components/Resume/Resume';

type muiTheme = 'light' | 'dark'
function App(): JSX.Element {
  const themePreference = localStorage.getItem('theme') || 'light';
  const [mode, setMode] = React.useState<muiTheme>(themePreference as muiTheme);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  useEffect(()=>{
    localStorage.setItem("theme", mode)
  },[mode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          contrastThreshold: 4.5,
          ...(mode === 'light') ? 
          {
            background: {
              paper: '#e3f2fd',
            },
          } : 
          {
            
          },
        },
        typography: {
          h2: {
            color: '#2196f3',
            fontSize: '3rem',
            fontWeight: 'bold',
          },
          h1: {
            '@media (max-width:600px)': {
              fontSize: '3rem',
            },
          }
        },
        components: {
          MuiLink: {
              defaultProps: {
                  color: mode === 'light' ? '#0D47A1' : '#64B5F6'
              },
          },
        },
      }),
    [mode],
  );
  
  return (
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomeContainer/>} />
            <Route path='/resume' element={<Resume/>}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;

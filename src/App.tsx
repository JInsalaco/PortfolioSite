import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomeContainer from './components/HomeContainer';
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
import PublishArticleContainer from './components/PublishArticleContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ColorModeContext } from './ColorModeContext';
type muiTheme = 'light' | 'dark'
function App() {
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
          }
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
            <Route path='/blog' element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost/>} />
            <Route path="/admin/publish" element={<PublishArticleContainer/>}/>
            <Route path="*" element={<Navigate replace to="/"/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

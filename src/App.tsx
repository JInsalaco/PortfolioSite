import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Blog } from "./components/Blog/Blog";
import { BlogPost } from "./components/Blog/BlogPost";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CreateArticle from "./components/Publishing/CreateArticle";

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
          <Route path="/admin/publish" element={<CreateArticle/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

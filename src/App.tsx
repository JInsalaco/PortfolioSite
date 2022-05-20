import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
    <body className='main-body'>
      <Header/>
      <Home/>
      <Footer/>
    </body>
  );
}

export default App;

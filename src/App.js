import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer';
import Homebanner from './components/Homebanner';
import Services from './components/Services';

function App() {



  return (
   <>
   <Header/>
   <Home/>
   <Homebanner/>
   <Services/>
   <Footer/>
   </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer';
import Homebanner from './components/Homebanner';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import Blog from './components/Blog';

function App() {



  return (
   <>
   <Header/>
   <Home/>
   <Homebanner/>
   <Services/>
   <CaseStudy/>
   <Blog/>
   <Footer/>
   </>
  );
}

export default App;

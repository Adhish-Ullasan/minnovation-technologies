import Blog from "../components/Blog"
import CaseStudy from "../components/CaseStudy"
import Footer from "../components/footer"
import Header from "../components/Header"
import Homebanner from "../components/Homebanner"
import Services from "../components/Services"


const Home = () => {

    return (
    <>
   <Header/>
   <Homebanner/>
   <Services/>
   <CaseStudy/>
   <Blog/>
   <Footer/>
    </>
    )
  }
export default Home

import "./HomePage.css"
import Header from "../components/Header"
import FoodsComponent from "../components/FoodComponent"
import Sidebar from '../components/Sidebar';
import Footer from "../components/Footer"
import { useStateContext } from '../context/ContextProvider';
import Banner from "../components/Banner";

function HomePage() {
  const { sidebar } = useStateContext()
  return (
    <>
      <div className='home-header'>
     {sidebar? (
          <div className='sidebar'>
            <Sidebar />
          </div>
        ): (
          ""
        )}
     <Header/>
     <Banner />
     <FoodsComponent/>
     <Footer />
     </ div>
    </>
  )
}

export default HomePage
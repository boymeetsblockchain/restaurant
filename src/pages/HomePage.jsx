import Header from "../components/Header"
import FoodsComponent from "../components/FoodComponent"
import Sidebar from '../components/Sidebar';
import { useStateContext } from '../context/ContextProvider';
function HomePage() {
  const { sidebar } = useStateContext()
  return (
    <>
     {/* <div className='app-header'> */}
     {sidebar? (
          <div className='sidebar'>
            <Sidebar />
          </div>
        ): (
          ""
        )}
     <Header/>
     <FoodsComponent/>
    </>
  )
}

export default HomePage
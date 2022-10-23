import "./Favorite.css"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useStateContext } from '../context/ContextProvider'

const Favorite = () => {
  const { sidebar } = useStateContext()

  return (
    <>
      <div className="favorite-header">
        {sidebar ? (
          <div className='sidebar'>
            <Sidebar />
          </div>
        ) : (
          ""
        )}
        <Header />
        <h1>Profile</h1>
        <Footer />
      </div>
    </>
  )
}

export default Favorite
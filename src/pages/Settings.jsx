import "./Settings.css"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useStateContext } from "../context/ContextProvider"
import Sidebar from "../components/Sidebar"

const Settings = () => {
  const { sidebar } = useStateContext()

  return (
    <>
      <div className='settings-header'>
        {sidebar ? (
          <div className='sidebar'>
            <Sidebar />
          </div>
        ) : (
          ""
        )}
      <Header />
      <h1>settings</h1>
      <Footer />
    </div>
    </>
  )
}

export default Settings
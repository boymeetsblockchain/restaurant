import { AiOutlineClose } from "react-icons/ai"
import { useStateContext } from "../context/ContextProvider"
import "./Sidebar.css"

const Sidebar = () => {
    const { setSidebar } = useStateContext()

  return (
    <div>
        <div className='sidebar-header'>
              <h2>Logo</h2>
              <span className="close-icons">
                  <AiOutlineClose  onClick={() => setSidebar(false)} />
              </span>
        </div>
    </div>
  )
}

export default Sidebar
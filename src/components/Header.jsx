import { GiHamburgerMenu } from "react-icons/gi"
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import "./Header.css"
import { useStateContext } from "../context/ContextProvider"
import logo from "../data/logo.png"

const Header = () => {
    const { setSidebar } = useStateContext()
    const navigate = useNavigate();

  const onClick =()=>{
     navigate('/signup')
  }
  return (
    <div className="header">
        <div className="header-items">
              <GiHamburgerMenu onClick={() => setSidebar(true)} style={{ cursor:"pointer"}}/>  
          <Link to="/"><img src={logo} alt="" className="logo" /></Link>
              <div className="header-right">
              <PersonOutlineIcon onClick={onClick} style={{cursor:"pointer"}}/>
              </div>
        </div>
    </div>
  )
}

export default Header
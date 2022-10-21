import { GiHamburgerMenu } from "react-icons/gi"
import { useNavigate } from "react-router-dom";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";
import "./Header.css"
import banner from "../data/banner.png"
import { useStateContext } from "../context/ContextProvider"

const Header = () => {
    const { setSidebar } = useStateContext()
    const navigate = useNavigate();
  const onClick =()=>{
     navigate('/sign-up')
  }
  return (
    <div className="header">
        <div className="header-items">
              <GiHamburgerMenu onClick={() => setSidebar(true)} style={{ cursor:"pointer"}}/>
              <h1 style={{ cursor: "pointer" }}>Logo</h1>
              <div className="header-right">
              <PersonOutlineIcon onClick={onClick} style={{cursor:"pointer"}}/>
              </div>
        </div>
        <div className="banner">
            <div className="banner-items">
                  <p>Get special discount</p>
                  <h2>up to 85%</h2>
                  <button>claim voucher</button>
            </div>
              <img className="banner-image" src={banner} alt="banner"/>
        </div>
    </div>
  )
}

export default Header
import React from "react"
import style from "./NavMain.module.css"
import { Link } from "react-router-dom"
import { ReactComponent as IconMenu } from "../SideVar/IconsSideBar/menu.svg"
import { ReactComponent as IconX } from "../SideVar/IconsSideBar/x.svg"
import PropTypes from "prop-types"
import Search from "../../TodoContainer/Components/Search/Search.js"
import { ReactComponent as IconHome } from "../SideVar/IconsSideBar/home.svg"

const NavMain = ({ setSideBar, sideBar, handleSearch }) => {
  //Hamburger state
  const [hambugerMenu, setHamburgerMenu] = React.useState(true)
  //Sidebar and hamburger/x icons
  const handleIconMenu = () => {
    setHamburgerMenu(!hambugerMenu)
    setSideBar(!sideBar)
  }

  return (
    <nav className={style.nav_container}>
      <ul className={style.nav_list}>
        <li className={style.menu}>
          {hambugerMenu ? (
            <Link to="#">
              <IconMenu className={style.icon_menu} onClick={handleIconMenu} />
            </Link>
          ) : (
            <Link to="#">
              <IconX className={style.icon_menu} onClick={handleIconMenu} />
            </Link>
          )}
        </li>
        <li>
          <Link to="/">
            <IconHome className={style.icon_menu} />
          </Link>
        </li>
        <li>
          <Search handleSearch={handleSearch} />
        </li>
      </ul>
    </nav>
  )
}

NavMain.propTypes = {
  setSideBar: PropTypes.func,
  sideBar: PropTypes.bool,
  handleSearch: PropTypes.func,
}

export default NavMain

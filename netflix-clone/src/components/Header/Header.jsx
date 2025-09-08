import React from 'react'
import "./Header.css"
import Netflixlogo from "../../assets/images/Netflix_Logo_RGB.png";
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <div className="nav-links">
            <ul>
              <li>
                <img src={Netflixlogo} alt="netflixlogo" width="100" />
              </li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Games</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
        </div>
        <div className="header_right">
          <ul>
            <li className="icon">
              <IoMenu />
            </li>
            <li className="icon">
              <SearchIcon />
            </li>
            <li className="icon">
              <NotificationsNoneIcon />
            </li>
            <li className="icon">
              <AccountBoxIcon />
            </li>
            <li className="icon">
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
        {/* <div className="header-right">
            <SearchIcon className="icon" />
            <NotificationsIcon className="icon" />
            <AccountBoxIcon className="icon" />
            <ArrowDropDownIcon className="icon" />
        </div> */}
      </div>
    </div>
  );
}

export default Header


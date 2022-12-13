import React from "react";
import "./ListVertical.css";

import { useState } from "react";
import {
  IoMdBookmark,
  IoMdCall,
  IoMdChatboxes,
  IoMdClipboard,
  IoMdClose,
  IoMdHammer,
  IoMdHome,
  IoMdImage,
  IoMdMenu,
  IoMdPerson,
} from "react-icons/io";
import { Link } from "react-router-dom";

export const ListVertical = () => {
  const [active, setActive] = useState(false);

  const activateNav = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className={active ? "header" : "header-mobile"}>
        {/* <div className={active ? 'header' : 'header'}> */}
        {/* <div className={active ? 'header-mobile' : 'header' }> */}

        <div className="menu-icon" onClick={activateNav}>
          {!active ? (
            <IoMdMenu className="menu" />
          ) : (
            <IoMdClose className="menu" />
          )}
        </div>

        <nav>
          <ul className={active ? "ul-item" : "ul-item oicon"}>
            {/* <ul className={active ? 'ul-item' : 'ul-item'}> */}
            {/* <ul className={active ? 'ul-item oicon': 'ul-item'}> */}

            <li>
              <IoMdHome className="icon" />
              <Link to="/home">Home</Link>
            </li>

            <li>
              <IoMdClipboard className="icon" />
              <Link to="/ListAdmin">List Admin</Link>
            </li>

            <li>
              {/* <IoMdImage className="icon" /> */}
              <IoMdPerson className="icon" />
              <Link to="/women">Femme</Link>
            </li>

            <li>
              {/* <IoMdBookmark className="icon" /> */}
              <IoMdPerson className="icon" />
              <Link to="/men">Homme</Link>
            </li>

            <li>
              <IoMdPerson className="icon" />

              <Link to="/enfant"> Enfant</Link>
            </li>

            {/* <li>
     <IoMdChatboxes className='icon'/>
     <Link to='/'>home</Link>
 </li> */}

            {/* <li>
     <IoMdHammer className='icon'/>
     <Link to='/'>home</Link>
 </li> */}

            <li>
              <IoMdCall className="icon" />
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

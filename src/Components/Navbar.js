import React, { useState, useEffect } from "react";
import Logo from "../Assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-router-dom";
import { RiLoginCircleFill } from "react-icons/ri";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [navbarBlur, setNavbarBlure] = useState("none");

  const menuOptions = [
    {
      text: "Accueil",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "À propos",
      icon: <InfoIcon />,
      path: "/about",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "/contact",
    },
    {
      text: "Se Connecter",
      icon: <RiLoginCircleFill />,
      path: "https://www.couverture-auto.fr",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setNavbarBg("#f9f9f9bc");
        setNavbarBlure("blur(6px)");
      } else {
        setNavbarBg("transparent");
        setNavbarBlure("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{ backgroundColor: navbarBg, backdropFilter: navbarBlur }}
      className="nav"
    >
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        <button
          className="primary-button"
          onClick={() =>
            window.open("https://www.couverture-auto.fr/", "_blank")
          }
        >
          Se Connecter
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineMenuAlt3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 280 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
          className="nav-menu"
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>

                  <Link to={item.path}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

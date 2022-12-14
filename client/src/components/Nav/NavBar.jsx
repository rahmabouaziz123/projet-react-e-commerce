import React, { useEffect } from "react";

// import { Link } from "react-router-dom";
import { Navbar, Dropdown, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { icons } from "./Icons.js";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logout } from "../../redux/actions/actionUser.js";
import { Profile } from "../Profile.jsx";
// import { NavLink } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { LogoImage } from "./LogoImage.jsx";


// import "./ListAdmin.css";
// import "../Admin/ListAdmin.css"

export const NavBar = () => {
  const { user, loading } = useSelector((state) => state.userReducer);
  // console.log(user);

  ////////////////////cart **////////////
  const { cartItems } = useSelector((state) => state.cartReducer);
  // console.log(cartItems);
  ///qty

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <div>
      <Layout>
        <Navbar isBordered className="nav5">
          {/* <Navbar.Brand className="pointer1">
            <img className="loginMongo" src="../../img/loginMongo.png" alt="" />

            <Text b color="inherit" hideIn="xs">
              MANGO
            </Text>
          </Navbar.Brand> */}
          <LogoImage/>

          {/* </Link> */}

          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="underline"
          >
            <Dropdown isBordered>
              {/* <Navbar.Item>
                <Dropdown.Button
                  auto
                  light
                  css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                  }}
                  iconRight={icons.chevron}
                  ripple={false}
                >
                  Products
                </Dropdown.Button>
              </Navbar.Item> */}

              <Dropdown.Menu
                aria-label="ACME features"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
             
                {/* <Dropdown.Item
                  key="autoscaling"
                  showFullDescription
                  description="List Admin *********."
                  icon={icons.scale}
                >
             
                List Admin
                </Dropdown.Item> */}

                {/* <LogoListAdmin/> */}
             


                {/* <Dropdown.Item
                  key="usage_metrics"
                  showFullDescription
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                  icon={icons.activity}
                >
            
                  Men
                </Dropdown.Item> */}
                {/* <Dropdown.Item
                  key="production_ready"
                  showFullDescription
                  description="ACME runs on ACME, join us and others serving requests at web scale."
                  icon={icons.flash}
                >
                 
                  Enfant
                </Dropdown.Item> */}
                {/* <Dropdown.Item
                  key="99_uptime"
                  showFullDescription
                  description="Applications stay on the grid with high availability and high uptime guarantees."
                  icon={icons.server}
                >
                  +99% Uptime
                </Dropdown.Item> */}
                {/* <Dropdown.Item
                  key="supreme_support"
                  showFullDescription
                  description="Overcome any challenge with a supporting team ready to respond."
                  icon={icons.user}
                >
                  +Supreme Support
                </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
             
            {user && user.userRole == "admin" ? (
            <Navbar.Link  href="/listAdmin" className="listadmin1">
             List Admin
            </Navbar.Link>
               ):null}
            <Navbar.Link isActive href="/femmes">
              Femmes
            </Navbar.Link>

            <Navbar.Link href="/hommes">Hommes</Navbar.Link>
            <Navbar.Link href="/kids">Enfants</Navbar.Link>

            <Navbar.Link href="/" onClick={() => dispatch(logout())}>
              Logout
            </Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            {/* <Navbar.Link href="#">{user.fullName}</Navbar.Link> */}

            <Dropdown isBordered>
              <Navbar.Item>
                <Dropdown.Button
                  auto
                  light
                  css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                  }}
                  iconRight={icons.chevron}
                  ripple={false}
                >
                  <img className="imglogOut" src="images/logoout5.png" alt="" />
                </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="ACME features"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
                <Dropdown.Item
                  key="autoscaling"
                  showFullDescription
                  icon={icons.scale}
                >
                  {/* <button onClick={() => dispatch(logout())}> Logout </button> */}
                  <Navbar.Link href="/" onClick={() => dispatch(logout())}>
                    Logout
                  </Navbar.Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Profile />

            <Navbar.Link color="inherit" href="/Login">
              Login
            </Navbar.Link>

            <Navbar.Item>
              <Button auto flat as={Link} href="SignUp">
                Sign Up
              </Button>
            </Navbar.Item>

            {user && user.userRole !== "admin" ? (
              <Navbar.Link href="/cart">
                <div>
                  <div className="shopping">
                    {/* <AiOutlineShoppingCart /> */}
                    <img className="logo55" src="../../img/chario.PNG" alt="" />
                  </div>
                  <div className="count">
                    {cartItems &&
                      cartItems.reduce(
                        (accumulator, currentValue) =>
                          accumulator + currentValue.qty,
                        0
                      )}
                  </div>
                </div>
              </Navbar.Link>
            ) : null}
          </Navbar.Content>
        </Navbar>
      </Layout>
    </div>
  );
};

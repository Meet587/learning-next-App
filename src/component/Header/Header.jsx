"use client";
/** @jsxRuntime classic */
/** @jsx jsx */
import "./header.module.scss";
import { jsx, Box, Container, MenuButton, Flex, Button, Link } from "theme-ui";
import { useState } from "react";
import Sticky from "react-stickynode";
import Logo from "../Logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const path = usePathname();

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box as="header" variant="layout.header">
          <Container>
            <Box sx={styles.headerInner}>
              <Logo />

              {path === "/" && (
                <Flex
                  as="nav"
                  sx={styles.navbar}
                  className={mobileMenu ? "navbar active" : "navbar"}
                >
                  <Box
                    as="ul"
                    sx={styles.navList}
                    className={mobileMenu ? "active" : ""}
                  >
                    <li>
                      <Link
                        className="nav-item"
                        href={"https://stage.app.investifyd.com/login"}
                        target="_blank"
                        style={{
                          cursor: "pointer",
                          fontWeight: "600",
                          color: "background",
                          textDecoration: "none",
                        }}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item"
                        href={"https://stage.app.investifyd.com/register"}
                        target="_blank"
                        style={{
                          cursor: "pointer",
                          fontWeight: "600",
                          color: "background",
                          textDecoration: "none",
                        }}
                      >
                        Sign Up
                      </Link>
                    </li>
                   
                  </Box>
                
                </Flex>
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  navLogin: {},

  headerWrapper: {
    backgroundColor: "#0A2542",
    transition: "0.3s ease-in-out 0s",
    ".is-sticky": {
      header: {
        backgroundColor: "#0A2542",
        boxShadow: "0 6px 13px rgba(38, 78, 118, 0.1)",
        py: [12],
        "&.is-mobile-menu": {
          backgroundColor: "#0A2542",
        },
      },
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media only screen and (max-width: 768px)": {
      ".navbar": {
        position: "absolute",
        top: "100%",
        backgroundColor: "#0A2542",
        width: "100%",
        left: 0,
        p: "20px 30px",
        display: "block",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        opacity: 0,
        visibility: "hidden",
        minHeight: "calc(100vh - 77px)",
        transition: "all 0.3s ease-in-out 0s",
        "&.active": {
          opacity: 1,
          visibility: "visible",
        },
        ul: {
          display: "block",
          "li + li": {
            marginTop: 5,
          },
          a: {
            color: "white",
          },
        },
      },
    },
  },
  navbar: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  navList: {
    display: ["flex"],
    listStyle: "none",
    marginLeft: "auto",
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
      margin: "0 20px",
      color: "background",
      textDecoration: "none",
    },
    hover: {
      color: "#28DDB2",
    },
    ".active": {
      color: "primary",
    },
  },
  explore: {
    display: ["block", "block", "block", "block", "none"],
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: "translateX(-50%)",
  },
  closeButton: {
    height: "32px",
    padding: "4px",
    minHeight: "auto",
    width: "32px",
    ml: "3px",
    path: {
      stroke: "#fff",
    },
  },
};

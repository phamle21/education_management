import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import BurgerIcon from "../../assets/svg/BurgerIcon";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import Backdrop from "../elements/Backdrop";
// Components
import Sidebar from "./Sidebar";

export default function TopNavbar() {
    const [y, setY] = useState(window.scrollY);
    const [sidebarOpen, toggleSidebar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        };
    }, [y]);


    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
            <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
                <NavInner className="container flexSpaceCenter">
                    <Link className="pointer flexNullCenter" to="home" smooth>
                        <LogoIcon />
                        <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                            Code Academy
                        </h1>
                    </Link>
                    <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
                        <BurgerIcon />
                    </BurderWrapper>
                    <UlWrapper className="flexNullCenter">
                        <li className="semiBold font15 pointer">
                            <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy smooth offset={-80}>
                                Trang chủ
                            </Link>
                        </li>
                        <li className="semiBold font15 pointer">
                            <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy smooth offset={-80}>
                                Dịch vụ
                            </Link>
                        </li>
                        <li className="semiBold font15 pointer">
                            <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy smooth offset={-80}>
                                Khóa học
                            </Link>
                        </li>
                        {/* <li className="semiBold font15 pointer">
                            <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy smooth offset={-80}>
                                Blog
                            </Link>
                        </li> */}
                        {/* <li className="semiBold font15 pointer">
                            <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy smooth offset={-80}>
                                Giảng viên
                            </Link>
                        </li> */}
                        <li className="semiBold font15 pointer">
                            <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy smooth offset={-80}>
                                Liên hệ
                            </Link>
                        </li>
                    </UlWrapper>
                    <UlWrapperRight className="flexNullCenter">
                        <li className="semiBold font15 pointer">
                            <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                                Log in
                            </a>
                        </li>
                        <li className="semiBold font15 pointer flexCenter">
                            <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                                Get Started
                            </a>
                        </li>
                    </UlWrapperRight>
                </NavInner>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


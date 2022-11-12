import React from "react";
// Sections
import TopNavbar from "../../components/Nav/TopNavbar";
import Blog from "../../components/sections/Blog";
import Contact from "../../components/sections/Contact";
import Courses from "../../components/sections/Courses";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import Lecturer from "../../components/sections/Lecturer";
import Services from "../../components/sections/Services";
import '../../style/landing/flexboxgrid.min.css';
import '../../style/landing/index.css';

// Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../style/style.scss';

export default function Landing() {
    return (
        <>
            <TopNavbar />
            <Header />
            <Services />
            <Courses />
            <Blog />
            <Lecturer />
            <Contact />
            <Footer />
        </>
    );
}


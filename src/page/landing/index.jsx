import React from "react";
// Sections
import TopNavbar from "../../components/Nav/TopNavbar";
import Blog from "../../components/sections/Blog";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import Lecturer from "../../components/sections/Lecturer";
import Projects from "../../components/sections/Projects";
import Services from "../../components/sections/Services";
import '../../style/landing/flexboxgrid.min.css';
import '../../style/landing/index.css';

export default function Landing() {
    return (
        <>
            <TopNavbar />
            <Header />
            <Services />
            <Projects />
            <Blog />
            <Lecturer />
            <Contact />
            <Footer />
        </>
    );
}


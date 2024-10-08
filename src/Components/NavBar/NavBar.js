import React from 'react';

// Import Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Import CSS
import './NavBar.css';
import '../Social-Medias/SocialMedias.css';

// Import Images
import MithOficialLogo from "../../Images/MithLogo.png";
import MithFundoCarrossel from "../../Images/MithFundoCarrosel.png";
import Carousel from "../Carrosel-Card/CarroselCard";
import AboutMith from "../AboutMith/AboutMith";
import Footer from "../Footer/Footer";

function NavBarMith() {
    return (
        <>
            <Navbar id='navbar' variant="dark">
                <Container id='container-NavBar'>
                    <div className="div-navbar">
                        <Navbar.Brand href="#container-NavBar"><img src={MithOficialLogo} alt="Logo" className="navbar-logo"/></Navbar.Brand>
                    </div>
                    <Navbar.Brand href="#home" className="navbar-item">HOME</Navbar.Brand>
                    <Navbar.Brand href="#home" className="navbar-item">INFLUENCERS</Navbar.Brand>
                    <Navbar.Brand href="https://www.mithoficial.com.br/" target="_blank" rel="noopener noreferrer"
                                  className="navbar-item">MITH STORE</Navbar.Brand>
                    <Navbar.Brand href="#footer" className="navbar-item">SOBRE</Navbar.Brand>
                </Container>
            </Navbar>
            <div id="wallpaper">
                <img src={MithFundoCarrossel} alt="Fundo"/>
            </div>
            <div className="carousel-container">
                <Carousel/>
            </div>
            <br/>
            <AboutMith/>

            <Footer/>


        </>
    );
}

export default NavBarMith;

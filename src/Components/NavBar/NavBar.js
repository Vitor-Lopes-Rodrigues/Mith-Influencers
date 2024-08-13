import React from 'react';

// Import Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Import CSS
import './NavBar.css';
import '../Social-Medias/SocialMedias.css';
// import './NavBarMith.css';

// Import Images
import MithOficialLogo from "../../Images/MithLogo.png";
import MithFundoCarrossel from "../../Images/MithFundoCarrosel.png";
import SocialMedias from "../Social-Medias/SocialMedias";
import FloatingButtons from "../Floating Social Networks/FloatingSocialNetworks";
import Carousel from "../Carrosel-Card/CarroselCard";

function NavBarMith() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container id='container-NavBar'>
                    <Navbar.Brand href="#container-NavBar"><img src={MithOficialLogo} alt="Logo" className="navbar-logo" /></Navbar.Brand>
                    <Navbar.Brand href="#home" className="navbar-item">Influencers</Navbar.Brand>
                    <Navbar.Brand href="#home" className="navbar-item">Home</Navbar.Brand>
                    <Navbar.Brand href="https://www.mithoficial.com.br/" target="_blank" rel="noopener noreferrer" className="navbar-item">Site Oficial Mith</Navbar.Brand>
                    <Navbar.Brand href="#home" className="navbar-item">Sobre</Navbar.Brand>
                </Container>
            </Navbar>
            <div id="wallpaper">
                <img src={MithFundoCarrossel} alt="Fundo" />
            </div>
            <div className="carousel-container">
                <Carousel />
            </div>
            <div>
                <FloatingButtons />
            </div>
        </>
    );
}

export default NavBarMith;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
    return (
        <Navbar id="footer" className="footer">
            <Container className="footer-content">
                <Navbar.Brand href="https://www.mithoficial.com.br/" target="_blank" rel="noopener noreferrer" className="footer-brand text-white">
                    &copy; 2024 Mith Oficial.
                <br/>Todos os direitos reservados.
                </Navbar.Brand>
                <div className="footer-social">
                    <a href="https://www.facebook.com/oficialmith/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/mithoficial" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/channel/UCeVG3Qq6QD9QSjl9oBx7rUw" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaYoutube />
                    </a>
                </div>
                <div className="footer-text">
                    <p>Este site é um projeto de desenvolvimento criado para praticar habilidades e promover influenciadores.</p>
                    <p className="highlighted-title">Conheça os seus criadores 💪</p>
                    <div className="creators">
                        <h5>
                            Vitor Lopes Rodrigues
                            <a href="https://www.instagram.com/vitor_lopes_rodrigues/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/vitor-lopes-rodrigues/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                        </h5>
                        <h5>
                            Richard Valentim Da Silva
                            <a href="https://www.instagram.com/valentimrichardd/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/richardvalentim/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                        </h5>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarroselCard.css';

// Import Images
import EnzoRocati from '../../Images/Integrantes/EnzoRocati.png';
import CalebeDias from '../../Images/Integrantes/CalebeDias.png';
import GabrielRuano from '../../Images/Integrantes/GabrielRuano.png';
import GenderRocha from '../../Images/Integrantes/GêderRocha.png';
import KillyanScherk from '../../Images/Integrantes/KillyanScherk.jpg';
import GabrielGoncalves from '../../Images/Integrantes/GabrielGoncalves.jpg';
import VitorCapial from '../../Images/Integrantes/VitorCapial.jpg';

const cards = [
    {
        title: "Enzo Rocati",
        description: "Enzo Rocati é um influenciador digital que se destaca por seu estilo de vida ativo e por ser um dos embaixadores da marca Mith...",
        imageUrl: EnzoRocati,
    },
    {
        title: "Calebe Dias",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        imageUrl: CalebeDias,
    },
    {
        title: "Gabriel Ruano",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        imageUrl: GabrielRuano,
    },
    {
        title: "Géder Rocha",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        imageUrl: GenderRocha,
    },
    {
        title: "Killyan Scherk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        imageUrl: KillyanScherk,
    },
    {
        title: "Gabriel Gonçalves",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        imageUrl: GabrielGoncalves,
    },
    {
        title: "Vitor Capial",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        imageUrl: VitorCapial,
    }
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleCopyClick = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${text} copiado para a área de transferência!`);
        });
    };

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <Card
                    id="card"
                    key={index}
                    sx={{
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '15px',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 0,
                    }}
                >
                    <Box id="cards">
                        <Typography variant="h5" className="card-title">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" className="card-description">
                            {card.description}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleCopyClick(card.title)}
                            sx={{ mt: 2, backgroundColor: 'rgba(255, 255, 255, 0.7)', color: '#000' }}
                            startIcon={<FileCopyIcon />}
                        >
                            Copiar Nome
                        </Button>
                    </Box>
                </Card>
            ))}
        </Slider>
    );
};

export default Carousel;

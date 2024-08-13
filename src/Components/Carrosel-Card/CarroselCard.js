import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
import EnzoRocati from '../../Images/Integrantes/EnzoRocati.png';
import CalebeDias from '../../Images/Integrantes/CalebeDias.png';
import GabrielRuano from '../../Images/Integrantes/GabrielRuano.png';
import GenderRocha from '../../Images/Integrantes/GêderRocha.png';

const cards = [
    {
        title: "Enzo Rocati",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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
    // Adicione mais cards aqui
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

    return (
        <Slider {...settings}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    sx={{
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '15px',
                        color: '#fff',
                        height: 400,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: 2,
                    }}
                >
                    <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 2, borderRadius: '15px' }}>
                        <Typography variant="h5">{card.title}</Typography>
                        <Typography variant="body2">{card.description}</Typography>
                    </Box>
                </Card>
            ))}
        </Slider>
    );
};

export default Carousel;

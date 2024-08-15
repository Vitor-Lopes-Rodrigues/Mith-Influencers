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
        description: "Com Rocati não tem essa de dia triste.\n" +
            "Mais um dia para ser feliz! Bora?\n" +
            "Conhecido também como a LENDA!",
        imageUrl: EnzoRocati,
    },
    {
        title: "Calebe Dias",
        description: "O nosso famoso careca dono do @clubedopumpoficial \n" +
            "Faz a jogadinha!\n",
        imageUrl: CalebeDias,
    },
    {
        title: "Gabriel Ruano",
        description: "O cara que procura levar motivação e inspiração para os seus \n" +
            "seguidores.\n" +
            "Ja foram AESTHETICS hoje?",
        imageUrl: GabrielRuano,
    },
    {
        title: "Géder Rocha",
        description: "O grande Men’s Physique PRO 🥇.\n" +
            "Além de coach, traz conteudo sobre seus dias.",
        imageUrl: GenderRocha,
    },
    {
        title: "Killyan Scherk",
        description: "🥇 2x Top 1 Men’s Physique NBFB 2024\n" +
            "🏆 Campeão Overall Men’s Physique\n" +
            "Será que você treina fofo?",
        imageUrl: KillyanScherk,
    },
    {
        title: "Gabriel Gonçalves",
        description: "🌐IFBB PRO\n" +
            "Campeão Sur Pro cup 🏆\n" +
            "Brasileiro 🇧🇷 mais novo a se classificar para Mr. ⭕️lympia",
        imageUrl: GabrielGoncalves,
    },
    {
        title: "Vitor Capial",
        description: "Online Coach - TEAM CAPIAL\n" +
            "Famoso inspirador pelo conjunto de roupa COMAM",
        imageUrl: VitorCapial,
    }
];

// Componente CopyButton
const CopyButton = ({ text }) => {
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${text} copiado para a área de transferência!`);
        });
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={handleCopyClick}
            sx={{ mt: 2, backgroundColor: 'rgba(255, 255, 255, 0.7)', color: '#000' }}
            startIcon={<FileCopyIcon />}
        >
            Cupom!
        </Button>
    );
};

// Mapeamento de títulos para textos de cópia
const copyTextMap = {
    "Enzo Rocati": "ROCATI",
    "Calebe Dias": "Calebe Dias",
    "Gabriel Ruano": "ruano",
    "Géder Rocha": "GG",
    "Killyan Scherk": "ki",
    "Gabriel Gonçalves": "GGP",
    "Vitor Capial": "Indisponivel",
};

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
                        <CopyButton text={copyTextMap[card.title]} />
                    </Box>
                </Card>
            ))}
        </Slider>
    );
};

export default Carousel;

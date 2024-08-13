import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';

const FloatingButtons = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <IconButton
                sx={{
                    backgroundColor: '#E1306C', // Cor do Instagram
                    '&:hover': {
                        backgroundColor: '#C13584',
                    },
                    color: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                href="https://www.instagram.com/mithoficial/"
                target="_blank"
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                sx={{
                    backgroundColor: '#1877F2', // Cor do Facebook
                    '&:hover': {
                        backgroundColor: '#155DB2',
                    },
                    color: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                href="https://www.facebook.com/oficialmith/"
                target="_blank"
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                sx={{
                    backgroundColor: '#FF0000', // Cor do YouTube
                    '&:hover': {
                        backgroundColor: '#CC0000',
                    },
                    color: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
                href="https://www.youtube.com/channel/UCeVG3Qq6QD9QSjl9oBx7rUw"
                target="_blank"
            >
                <YouTubeIcon />
            </IconButton>
        </Box>
    );
};

export default FloatingButtons;

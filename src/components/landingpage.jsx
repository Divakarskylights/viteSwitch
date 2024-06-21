import React from 'react';
import { Box } from '@mui/material';
import BgVideo from '../assets/bg.mp4';
import TypeWriterText from './TypeWriterText';
import Navbar from './Navbar';


const Landingpage = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', fontFamily: 'Merianda, sans-serif' }}>
                <div style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: 0 }}>
                    <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                        <source src={BgVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <Box sx={{ position: 'absolute', top: '0%', left: '0%', transform: 'translate(-0%, -0%)', textAlign: 'center', zIndex: 1 }}>
                    <Navbar />
                </Box>
                <Box sx={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 1 }}>
                    <TypeWriterText />
                </Box>
            </Box>
        </>

    );
};

export default Landingpage;
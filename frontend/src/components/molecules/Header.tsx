import { Box } from '@mui/material';
import React from 'react';


const Header: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '90px',
                backgroundColor: '#333333',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                component={'img'}
                sx={{
                    height: '65px'
                }}
                src={"/uolHeader.png"}
            />
        </Box>
    );
}

export default Header;
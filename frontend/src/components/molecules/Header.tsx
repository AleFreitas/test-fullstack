import { Box } from '@mui/material';
import React from 'react';


const Header: React.FC = () => {
    return (
        <Box
            className="w-screen h-[90px] bg-[#333333] flex justify-center items-center"    
        >
            <Box
                component={'img'}
                className="h-[65px]"
                src={"/uolHeader.png"}
                onClick={() => window.location.href = '/'}
                sx={{cursor: 'pointer'}}
            />
        </Box>
    );
}

export default Header;
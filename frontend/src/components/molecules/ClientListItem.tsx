import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const ClientListItem: React.FC = () => {
    const upperLineTextStyle = { fontWeight: '600', fontSize: '15px', color: '#737980'}
    const bottomLineTextStyle = { color: '#949494', fontSize: '15px'}
    return (
        <Box
            sx={{
                border: '1px solid #f0f0f0',
                borderRadius: '5px',
                width: '100%',
                height: '70px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: '20px',
            }}
        >
            <Box>
                <Typography sx={upperLineTextStyle}>Nome</Typography>
                <Typography sx={bottomLineTextStyle}>emailemailemail</Typography>
            </Box>
            <Box>
                <Typography sx={upperLineTextStyle}>Nome</Typography>
                <Typography sx={bottomLineTextStyle}>emailemailemail</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box sx={{backgroundColor: 'green', width: '10px', height: '10px', borderRadius: '50%'}}/>
                <Typography sx={{ marginLeft: '5px', color: '#949494', fontSize: '15px'}}>Ativo</Typography>
            </Box>
            <Button
                sx={{
                    width: '110px',
                    height: '40px',
                    color: '#e19932',
                    textTransform: 'none',
                    backgroundColor: '#fff',
                    border: '1px solid #e19932',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#e19932',
                        color: '#fff'
                    }
                }}
            >Editar</Button>
        </Box>
    )
}

export default ClientListItem;
import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { User } from 'tabler-icons-react';
import ClientDasboardTitle from '../atoms/ClientDashboardTitle';
import ClientListItem from './ClientListItem';

const ClientDashboard: React.FC = () => {
    return (
        <Box
            sx={{
                marginTop: '80px',
                width: '80%',
                height: '500px',
            }}
        >
            <ClientDasboardTitle />
            <Divider />
            <Box
                sx={{width: '100%', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginY: '20px'}}
            >
                <Box>
                    <Typography sx={{ fontWeight: '600', fontSize: '17px', color: '#737980'}}>Listagem de usuários</Typography>
                    <Typography sx={{ color: '#949494', fontSize: '15px'}}>Escolha um cliente para visualizar os detalhes</Typography>
                </Box>
                <Button
                    sx={{
                        width: '110px',
                        height: '40px',
                        color: '#fff',
                        textTransform: 'none',
                        backgroundColor: '#e19932',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            width: '113px',
                            height: '43px',
                            backgroundColor: '#e19932'
                        }
                    }}
                >Novo cliente</Button>
            </Box>
            <ClientListItem />
        </Box>
    )
}

export default ClientDashboard;
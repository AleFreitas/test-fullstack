import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { User } from 'tabler-icons-react';
import ClientDasboardTitle from '../atoms/ClientDashboardTitle';
import ClientListItem from './ClientListItem';
import { useQuery } from '@tanstack/react-query';
import { getAllClientsFn } from '../../services/clientService';
import { IClientData } from '../../types/clients';

const ClientDashboard: React.FC = () => {
    const [clients, setClients] = useState<IClientData[]>([]);
    const {
        isLoading,
        data,
        error
    } = useQuery({
        queryKey: ['get-users'],
        queryFn: getAllClientsFn
    });
    useEffect(() => {
        if (data) {
            setClients(data.data);
        }
    }, [data]);

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
            <Box
                sx={{width: '100%', height: '500px', overflowY: 'auto'}}
            >
                {clients.map(client => (
                    <ClientListItem key={client.id} client={client} />
                ))}
            </Box>
            <Typography sx={{ color: '#949494', fontSize: '15px', marginTop: '10px'}}>Exibindo {clients.length} clientes</Typography>
        </Box>
    )
}

export default ClientDashboard;
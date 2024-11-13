import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ClientDasboardTitle from '../atoms/ClientDashboardTitle';
import ClientListItem from './ClientListItem';
import { useQuery } from '@tanstack/react-query';
import { getAllClientsFn } from '../../services/clientService';
import { IClientData } from '../../types/clients';
import { toast } from 'react-toastify';

const ClientDashboard: React.FC = () => {
    const [clients, setClients] = useState<IClientData[]>([]);
    const {
        isLoading,
        isSuccess,
        data,
        error
    } = useQuery({
        queryKey: ['get-users'],
        queryFn: getAllClientsFn
    });
    useEffect(() => {
        if (error) {
            toast.error('Erro ao carregar os clientes', {toastId: 'get-clients-error'});
        }
    },[error])
    useEffect(() => {
        if (data) {
            isSuccess && toast.success('Clientes obtidos com sucesso',{toastId: 'get-clients-success', autoClose: 2000});
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
                className="w-full h-[50px] flex justify-between items-center my-5"
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
            <Box sx={{width: '100%', height: '500px', overflowY: 'auto'}}>
                {clients.map(client => (
                    <ClientListItem key={client.id} client={client} />
                ))}
            </Box>
            <Typography sx={{ color: '#949494', fontSize: '15px', marginTop: '10px'}}>Exibindo {clients.length} clientes</Typography>
        </Box>
    )
}

export default ClientDashboard;
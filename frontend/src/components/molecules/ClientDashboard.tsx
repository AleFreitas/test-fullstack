import { Box, CircularProgress, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ClientDasboardTitle from '../atoms/ClientDashboardTitle';
import ClientListItem from './ClientListItem';
import { useQuery } from '@tanstack/react-query';
import { getAllClientsFn } from '../../services/clientService';
import { IClientData } from '../../types/clients';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../atoms/CustomButton';

const ClientDashboard: React.FC = () => {
    const [clients, setClients] = useState<IClientData[]>([]);
    const {
        isSuccess,
        isError,
        isLoading,
        data,
        error
    } = useQuery({
        queryKey: ['get-users'],
        queryFn: getAllClientsFn
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (error) {
            toast.error('Erro ao carregar os clientes', {toastId: 'get-clients-error'});
        }
    },[error])
    useEffect(() => {
        if (data) {
            if(isSuccess) {
                toast.success('Clientes obtidos com sucesso',{toastId: 'get-clients-success', autoClose: 2000});
            }
            setClients(data.data);
        }
    }, [data, isSuccess]);

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
                <CustomButton
                    color='#fff'
                    borderColor='#e19932'
                    backgroundColor='#e19932'
                    onClick={() => navigate('/client/new')}
                    hoverBackgroundColor='#fff'
                    hoverColor='#e19932'
                    text='Novo cliente'
                />
            </Box>
            <Box sx={{width: '100%', height: '500px', overflowY: 'auto'}}>
                {isLoading ? (
                    <Box className={'flex w-full h-[500px] items-center justify-center'}>
                        <CircularProgress color='inherit' />
                    </Box>
                ) : (
                    <>
                        {isSuccess && (
                            clients.length === 0 ? (
                                <Box className={'flex w-full h-[500px] items-center justify-center'}>
                                    <Typography sx={{color: '#949494', fontSize: '15px'}}>Nenhum cliente cadastrado</Typography>
                                </Box>
                            ): (
                                clients.map(client => (
                                    <ClientListItem key={client.id} client={client} />
                                ))
                            )
                        )}
                        {isError && (
                            <Box className={'flex w-full h-[500px] items-center justify-center'}>
                                <Typography sx={{color: '#949494', fontSize: '15px'}}>Erro ao carregar os clientes</Typography>
                            </Box>
                        )}
                    </>
                )}
            </Box>
            <Typography sx={{ color: '#949494', fontSize: '15px', marginTop: '10px'}}>Exibindo {clients.length} clientes</Typography>
        </Box>
    )
}

export default ClientDashboard;
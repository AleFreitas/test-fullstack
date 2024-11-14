import { Box, Typography } from '@mui/material';
import React from 'react';
import { IClientData } from '../../types/clients';
import useClientStore from '../../stores/clientStore';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../atoms/CustomButton';

interface IClientListItemProps {
    client: IClientData;
}

const ClientListItem: React.FC<IClientListItemProps> = ({client}) => {
    const {
        name,
        email,
        status,
        cellphone,
        cpf
    } = client;
    
    const statusInfo = {
        'active': ['#4aac5b', 'Ativo'],
        'inactive': ['#d53240', 'Inativo'],
        'waiting': ['#d3a710', 'Aguardando ativação'],
        'deactivated': ['#d2d2d2', 'Desativado']
    }
    
    const {
        setChosenClient
    } = useClientStore()
    const navigate = useNavigate()
    
    const upperLineTextStyle = { fontWeight: '600', fontSize: '15px', color: '#737980'}
    const bottomLineTextStyle = { color: '#949494', fontSize: '15px'}
    
    return (
        <Box
            className="w-full h-[70px] flex justify-between items-center"
            sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '5px',
                paddingX: '20px',
                marginBottom: '20px'
            }}
        >
            <Box className="w-1/4">
                <Typography sx={upperLineTextStyle}>{name}</Typography>
                <Typography sx={bottomLineTextStyle}>{email}</Typography>
            </Box>
            <Box className="w-1/4">
                <Typography sx={upperLineTextStyle}>{cpf}</Typography>
                <Typography sx={bottomLineTextStyle}>{cellphone}</Typography>
            </Box>
            <Box className="w-1/4 flex items-center">
                <Box sx={{backgroundColor: `${statusInfo[status][0]}`, width: '10px', height: '10px', borderRadius: '50%'}}/>
                <Typography sx={{ marginLeft: '5px', color: '#949494', fontSize: '15px'}}>{statusInfo[status][1]}</Typography>
            </Box>
            <CustomButton
                color='#e19932'
                borderColor='#e19932'
                backgroundColor='#fff'
                hoverColor='#fff'
                hoverBackgroundColor='#e19932'
                text='Editar'
                onClick={() => {
                    setChosenClient(client)
                    navigate(`/client/edit`)
                }}
            />
        </Box>
    )
}

export default ClientListItem;
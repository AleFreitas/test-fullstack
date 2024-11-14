import { Box, Divider, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ClientDasboardTitle from '../atoms/ClientDashboardTitle';
import { createClientFn, editClientFn } from '../../services/clientService';
import { IClientCreateData, IClientEditData } from '../../types/clients';
import { toast } from 'react-toastify';
import CustomButton from '../atoms/CustomButton';
import useClientStore from '../../stores/clientStore';
import { useNavigate } from 'react-router-dom';

const ClientForm: React.FC <{type: 'create' | 'edit'}> = ({type})   => {
    const createUserMessage = "Informe os campos a seguir para criar novo usuário:";
    const editUserMessage = "Preencha os campos que deseja editar neste usuário";
    const [formData, setFormData] = useState<IClientCreateData>({
        name: '',
        email: '',
        cpf: '',
        cellphone: '',
        status: 'deactivated'
    })
    const [formErrorMessages, setFormErrorMessages] = useState<{ [key in keyof IClientCreateData]?: string }>({})
    const {
        chosenClient,
        clearChosenClient
    } = useClientStore();

    const navigate = useNavigate();

    useEffect(() => {
        if (type === 'edit') {
            setFormData({
                name: chosenClient?.name || '',
                email: chosenClient?.email || '',
                cpf: chosenClient?.cpf || '',
                cellphone: chosenClient?.cellphone || '',
                status: chosenClient?.status || 'deactivated'
            })
        } else {
            clearChosenClient();
        }
    },[])// eslint-disable-line

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof IClientCreateData;
        if (name === 'cpf' || name === 'cellphone') {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value.replace(/\D/g, '')
            })
            if (formErrorMessages[name]) {
                setFormErrorMessages({
                    ...formErrorMessages,
                    [name]: ''
                })
            }
            if (/\D/.test(e.target.value)) {
                setFormErrorMessages({
                    ...formErrorMessages,
                    [name]: 'Apenas números são permitidos'
                });
            }
            return;
        } else if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
            if (formErrorMessages[name]) {
                setFormErrorMessages({
                    ...formErrorMessages,
                    [name]: ''
                });
            }
            if (!emailRegex.test(e.target.value)) {
                setFormErrorMessages({
                    ...formErrorMessages,
                    [name]: 'Email inválido'
                });
            }
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
            if (formErrorMessages[name]) {
                setFormErrorMessages({
                    ...formErrorMessages,
                    [name]: ''
                })
            }
        }
    };

    const handleSubmit = () => {
        const updatedErrors = {...formErrorMessages};
    
        const fields: (keyof IClientCreateData)[] = ['name', 'email', 'cpf', 'cellphone'];
        const missingFields = fields.filter(field => formData[field] === '');
        missingFields.forEach(field => {
            updatedErrors[field] = 'Campo obrigatório';
        });
        setFormErrorMessages(prevState => ({
            ...prevState,
            ...updatedErrors,
        }));
        const activeErrors = Object.values(updatedErrors).filter(error => error !== '');
        if (activeErrors.length > 0) {
            toast.error('Corrija os erros no formulário!', {toastId: 'form-error'});
            return;
        }
        
        if( type === "create") {
            createClientFn(formData)
            .then(() => {
                toast.success('Usuário criado com sucesso', {toastId: 'create-client-success', autoClose: 2000});
                setFormData({
                    name: '',
                    email: '',
                    cpf: '',
                    cellphone: '',
                    status: 'deactivated'
                });
            })
            .catch((e) => {
                if(e.response.status === 409) {
                    toast.error('Este email já está em uso', {toastId: 'create-client-error'});
                    return;
                }
                toast.error('Erro ao criar usuário', {toastId: 'create-client-error'});
            })
        } else {
            const filteredData: IClientEditData = Object.entries(formData).reduce((acc, [key, value]) => {
                if (value !== '') {
                    acc[key as keyof IClientEditData] = value;
                }
                return acc;
            }, {} as IClientEditData);
            filteredData.id = chosenClient?.id || '';
            editClientFn(filteredData)
                .then(() => {
                    toast.success('Usuário editado com sucesso');
                })
                .catch((e) => {
                    if(e.response.status === 409) {
                        toast.error('Este email já está em uso', {toastId: 'edit-client-error'});
                        return;
                    }
                    toast.error('Erro ao editar usuário', {toastId: 'edit-client-error'});
                })
            
        }
    }
        

    return (
        <Box
            sx={{
                marginTop: '80px',
                width: '80%',
            }}
        >
            <ClientDasboardTitle />
            <Divider />
            <Box
                className="w-full h-[50px] flex justify-between items-center my-5"
            >
                <Box>
                    <Typography sx={{ fontWeight: '600', fontSize: '17px', color: '#737980'}}>{type === 'create' ? 'Novo' : 'Editar'} usuário</Typography>
                    <Typography sx={{ color: '#949494', fontSize: '15px'}}>{type === "create" ? createUserMessage : editUserMessage}</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '320px',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                }}
                component="form"
            >
                <TextField
                    sx={{
                        marginBottom: '20px'
                    }}
                    name="name"
                    error={Boolean(formErrorMessages['name'])} 
                    helperText={formErrorMessages['name']}
                    fullWidth
                    label="Nome"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    sx={{
                        marginBottom: '20px'
                    }}
                    name="email"
                    error={Boolean(formErrorMessages['email'])} 
                    helperText={formErrorMessages['email']}
                    fullWidth
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    sx={{
                        marginBottom: '20px'
                    }}
                    name="cpf"
                    error={Boolean(formErrorMessages['cpf'])} 
                    helperText={formErrorMessages['cpf']}
                    fullWidth
                    label="CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                />
                <TextField
                    sx={{
                        marginBottom: '20px'
                    }}
                    name="cellphone"
                    error={Boolean(formErrorMessages['cellphone'])} 
                    helperText={formErrorMessages['cellphone']}
                    fullWidth label="Telefone"
                    value={formData.cellphone}
                    onChange={handleChange}
                />
                <TextField
                    sx={{
                        marginBottom: '20px'
                    }}
                    name="status" select fullWidth label="Status"  value={formData.status} onChange={handleChange}>
                    <MenuItem key={'active'} value={'active'}>
                        Ativo
                    </MenuItem>
                    <MenuItem key={'inactive'} value={'inactive'}>
                        Inativo
                    </MenuItem>
                    <MenuItem key={'waiting'} value={'waiting'}>
                        Aguardando ativação
                    </MenuItem>
                    <MenuItem key={'deactivated'} value={'deactivated'}>
                        Desativado
                    </MenuItem>
                </TextField>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                    <CustomButton
                        color='#fff'
                        borderColor='#e19932'
                        backgroundColor='#e19932'
                        text={type === 'create' ? 'Criar' : 'Editar'}
                        onClick={handleSubmit}
                    />
                    <CustomButton
                        color='#e19932'
                        borderColor='#e19932'
                        backgroundColor='#fff'
                        text='cancelar'
                        onClick={() => {
                            setFormData({
                                name: '',
                                email: '',
                                cpf: '',
                                cellphone: '',
                                status: 'deactivated'
                            })
                            clearChosenClient()
                            navigate('/')
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default ClientForm;
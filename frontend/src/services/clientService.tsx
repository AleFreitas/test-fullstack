import axios from 'axios';
import { IClientCreateData, IClientEditData } from '../types/clients';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getAllClientsFn = () => axios.get(`${BASE_URL}/users`);

export const editClientFn = (clientData: IClientEditData) =>
    axios.put(`${BASE_URL}/user`, clientData);

export const createClientFn = (clientData: IClientCreateData) =>
    axios.post(`${BASE_URL}/user`, clientData);

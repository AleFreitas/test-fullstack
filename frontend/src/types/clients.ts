export interface IClientCreateData {
    name: string;
    email: string;
    status: 'active' | 'inactive' | 'waiting' | 'deactivated';
    cellphone: string;
    cpf: string;
}

export interface IClientData extends IClientCreateData {
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface IClientEditData {
    id: string;
    name: string;
    email: string;
    status: 'active' | 'inactive' | 'waiting' | 'deactivated';
    cellphone: string;
    cpf: string;
}
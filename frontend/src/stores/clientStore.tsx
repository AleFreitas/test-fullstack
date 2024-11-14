import { create } from 'zustand';
import { IClientData } from '../types/clients';

interface ClientState {
    chosenClient: IClientData | null;
    setChosenClient: (client: IClientData | null) => void;
    clearChosenClient: () => void;
}

const useClientStore = create<ClientState>((set) => ({
    chosenClient: null,
    setChosenClient: (client) => set({ chosenClient: client }),
    clearChosenClient: () => set({ chosenClient: null }),
}));

export default useClientStore;

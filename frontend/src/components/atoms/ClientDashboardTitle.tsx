import React from 'react';
import { User } from 'tabler-icons-react';

const ClientDasboardTitle: React.FC = () => {
  return (
    <div
      className="flex items-center h-20 font-bold text-2xl"
      style={{ color: '#333333' }}
    >
      <User style={{ height: '30px', width: '30px' }} />
      <span className="ml-2">Painel de clientes</span>
    </div>
  );
};

export default ClientDasboardTitle;

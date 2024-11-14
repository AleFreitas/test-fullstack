import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/molecules/Header';
import ClientForm from '../components/molecules/ClientForm';

const UserForm: React.FC<{ type: 'create' | 'edit' }> = ({ type }) => {
  return (
    <>
      <Header />
      <Box className="w-full flex justify-center">
        <ClientForm type={type} />
      </Box>
    </>
  );
};

export default UserForm;

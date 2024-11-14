import React from 'react';
import { Box } from "@mui/material";
import Header from '../components/molecules/Header';
import ClientDashboard from '../components/molecules/ClientDashboard';

const UserList: React.FC = () => {

    return (
        <>
            <Header />
            <Box className="w-full flex justify-center">
                <ClientDashboard />
            </Box>
        </>
    );
};

export default UserList;
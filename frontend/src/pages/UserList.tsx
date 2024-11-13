import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
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
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "../pages/UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import UserForm from "../pages/UserForm";

const AppRoutes: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/client/new" element={<UserForm type={'create'}/>} />
            <Route path="/client/edit" element={<UserForm type={'edit'}/>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
    )
  };

  export default AppRoutes;
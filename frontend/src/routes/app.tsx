import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "../pages/UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AppRoutes: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
            <Route path="/" element={<UserList />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
    )
  };

  export default AppRoutes;
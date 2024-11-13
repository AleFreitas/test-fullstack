import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "../pages/UserList";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<UserList />} />
        </Routes>
    </BrowserRouter>
    )
  };

  export default AppRoutes;
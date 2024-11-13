import React from "react";
import AppRoutes from "./routes/app";
import "./globalStyles.css"; // Adicione esta linha

const App: React.FC = () => {
  return (
    <AppRoutes />
  );
};

export default App;
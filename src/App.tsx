import React from "react";
import AppRoutes from "./routes/index";
import Layout from "./components/Layout";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
};

export default App;

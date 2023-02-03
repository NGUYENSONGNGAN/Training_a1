import React from "react";
import { Route, Routes } from "react-router-dom";
import Var_let_cont from "../page/var_let_const";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Var_let_cont />} />
    </Routes>
  );
};

export default Router;

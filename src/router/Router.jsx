import React from "react";
import { Route, Routes } from "react-router-dom";
import Destructuring from "../page/detracturing";
import Funtion_arrowFuntion from "../page/funtion_arrowFuntion";
import Spread_restOperator from "../page/spread_restOperator";
import Var_let_cont from "../page/var_let_const";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Var_let_cont />} />
      <Route path="/funtion" element={<Funtion_arrowFuntion />} />
      <Route path="/spread" element={<Spread_restOperator />} />
      <Route path="/destructuring" element={<Destructuring/>} />
    
    </Routes>
  );
};

export default Router;

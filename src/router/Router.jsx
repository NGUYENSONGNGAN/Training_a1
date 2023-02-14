import React from "react";
import { Route, Routes } from "react-router-dom";
import ArrayInJs from "../page/array";
import Destructuring from "../page/destructuring";
import Funtion_arrowFuntion from "../page/funtionArrowFuntion";
import Spread_restOperator from "../page/spreadRestOperator";
import Var_let_cont from "../page/varLetConst";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Var_let_cont />} />
      <Route path="/funtion" element={<Funtion_arrowFuntion />} />
      <Route path="/spread" element={<Spread_restOperator />} />
      <Route path="/destructuring" element={<Destructuring/>} />
      <Route path="/array" element={<ArrayInJs/>} />
    
    </Routes>
  );
};

export default Router;

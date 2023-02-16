import React from "react";
import { Route, Routes } from "react-router-dom";
import ArrayInJs from "../page/array";
import ComponentArchitecture from "../page/componentArchitecture";
import Destructuring from "../page/destructuring";
import Funtion_arrowFuntion from "../page/funtionArrowFuntion";
import FunctionClasscomponent from "../page/functionClassComponent";
import Spread_restOperator from "../page/spreadRestOperator";
import Var_let_cont from "../page/varLetConst";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Var_let_cont />} />
      <Route path="/funtion" element={<Funtion_arrowFuntion />} />
      <Route path="/spread" element={<Spread_restOperator />} />
      <Route path="/destructuring" element={<Destructuring />} />
      <Route path="/array" element={<ArrayInJs />} />
      <Route path="/component" element={<ComponentArchitecture />} />
      <Route path="/component" element={<FunctionClasscomponent />} />
    </Routes>
  );
};

export default Router;

import React from "react";
import { Route, Routes } from "react-router-dom";
import ArrayInJs from "../page/array";
import ComponentArchitecture from "../page/componentArchitecture";
import Destructuring from "../page/destructuring";
import Funtion_arrowFuntion from "../page/funtionArrowFuntion";
import FunctionClasscomponent from "../page/functionClassComponent";
import Spread_restOperator from "../page/spreadRestOperator";
import Var_let_cont from "../page/varLetConst";
import ArrayReduce from "../page/arrayReduce";
import PropsState from "../page/propsState";
import UseState from "../page/useState";
import UseEffect from "../page/useEffect";
import UseEffectTimer from "../page/useEffectTime";
import UseRef from "../page/useRef";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Var_let_cont />} />
      <Route path="/funtion" element={<Funtion_arrowFuntion />} />
      <Route path="/spread" element={<Spread_restOperator />} />
      <Route path="/destructuring" element={<Destructuring />} />
      <Route path="/array" element={<ArrayInJs />} />
      <Route path="/arrayReduce" element={<ArrayReduce />} />
      <Route path="/component" element={<ComponentArchitecture />} />
      <Route path="/component" element={<FunctionClasscomponent />} />
      <Route path="/propState" element={<PropsState />} />
      <Route path="/useState" element={<UseState />} />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useEffectTimer" element={<UseEffectTimer />} />
      <Route path="/useRef" element={<UseRef />} />
    </Routes>
  );
};

export default Router;

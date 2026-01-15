import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes";
import type { JSX } from "react";

export default function App(): JSX.Element {
  const routers = useRoutes(appRoutes);
  return <>{routers}</>;
}

{/*
import TestMUI from "./components/TestMUI";
import ColorSwitches from "./lab/ColorSwitches";
import BasicButtons from "./lab/BasicButtons";
import BasicTable from "./lab/BasicTable";


export default function App(): JSX.Element {
  return <BasicTable />;
}

*/}
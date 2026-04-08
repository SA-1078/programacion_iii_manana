import React, { useState } from "react";
import LabTwButtons from "./lab/LabTwButtons";
import LabTwAlert from "./lab/LabTwAlert";
import LabTwCard from "./lab/LabTwCard";
import LabTwForm from "./lab/LabTwForm";
import LabTwTable from "./lab/LabTwTable";
import LabTriangleForm from "./lab/areaTriangulo";

type LabKey = "buttons" | "alert" | "card" | "form" | "table" | "triangulo";

export default function App() {
  const [lab, setLab] = useState<LabKey>("buttons");

  return (
    <div>
      <div style={{ padding: 16 }}>
        <label style={{ display: "block", marginBottom: 6 }}>Selecciona LAB</label>
        <select value={lab} onChange={(e) => setLab(e.target.value as LabKey)}>
          <option value="buttons">Buttons</option>
          <option value="alert">Alert</option>
          <option value="card">Card</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
          <option value="triangulo">Área del Triángulo</option>
        </select>
      </div>

      {lab === "buttons" && <LabTwButtons />}
      {lab === "alert" && <LabTwAlert />}
      {lab === "card" && <LabTwCard />}
      {lab === "form" && <LabTwForm />}
      {lab === "table" && <LabTwTable />}
      {lab === "triangulo" && <LabTriangleForm />}
    </div>
  );
}
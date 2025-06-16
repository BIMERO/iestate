import { Route, Routes } from "react-router-dom";
import "./App.css";
import Towers from "./pages/Towers";
import FloorView from "./pages/FloorView";
import ApartmentsView from "./pages/ApartmentsView";
import ApartmentDetails from "./pages/ApartmentDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Towers />} />
        <Route path="/floors/:id" element={<FloorView />} />
        <Route
          path="/floors/:towerId/apartments/:floorId"
          element={<ApartmentsView />}
        />
        <Route
          path="/floors/:towerId/apartments/:floorId/apartments/:apartmentId"
          element={<ApartmentDetails />}
        />
      </Routes>
    </>
  );
}

export default App;

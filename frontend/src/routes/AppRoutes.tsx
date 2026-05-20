import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Leads from "../pages/Leads";
import CreateLead from "../pages/CreateLead";
import EditLead from "../pages/EditLead";
import LeadDetails from "../pages/LeadDetails";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to="/dashboard"
          />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={
          <Dashboard />
        }
      />

      <Route
        path="/leads"
        element={<Leads />}
      />

      <Route
        path="/create-lead"
        element={
          <CreateLead />
        }
      />

      <Route
        path="/edit-lead/:id"
        element={
          <EditLead />
        }
      />

      <Route
        path="/lead/:id"
        element={
          <LeadDetails />
        }
      />

      <Route
        path="*"
        element={
          <NotFound />
        }
      />
    </Routes>
  );
}
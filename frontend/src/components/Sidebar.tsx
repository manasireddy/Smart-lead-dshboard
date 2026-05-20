import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaUsers,
  FaPlus,
} from "react-icons/fa";
import {
  NavLink,
} from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 w-[280px] h-screen bg-slate-950 text-white p-8 shadow-xl">
      <h1 className="text-4xl font-bold mb-10">
        Smart Leads
      </h1>

      <nav className="space-y-3">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition text-lg"
        >
          <FaChartBar />
          Dashboard
        </Link>

        <NavLink
          to="/leads"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition text-lg"
        >
          <FaUsers />
          Leads
        </NavLink>

        <NavLink
          to="/create-lead"
          className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition text-lg"
        >
          <FaPlus />
          Create Lead
        </NavLink>
      </nav>
    </aside>
  );
}
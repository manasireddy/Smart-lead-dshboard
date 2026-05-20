import { type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({
  children,
}: Props) {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="ml-[280px] flex flex-col min-h-screen">
        <Navbar />

        <main className="p-8 flex-1">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
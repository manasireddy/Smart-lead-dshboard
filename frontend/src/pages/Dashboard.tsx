import {
  useEffect,
  useState,
} from "react";

import Layout from "../components/Layout";

import {
  getDashboardStats,
} from "../api/leadApi";

interface Stats {
  totalLeads: number;
  qualified: number;
  lost: number;
}

export default function Dashboard() {
  const [stats,
    setStats] =
    useState<Stats>({
      totalLeads:
        0,
      qualified:
        0,
      lost: 0,
    });

  useEffect(() => {
    const fetchStats =
      async (): Promise<void> => {
        const data =
          await getDashboardStats();

        setStats(
          data
        );
      };

    void fetchStats();
  }, []);

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome to Smart Leads CRM
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
          <h2 className="text-slate-500">
            Total Leads
          </h2>

          <p className="text-4xl font-bold mt-3">
            {
              stats.totalLeads
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
          <h2 className="text-slate-500">
            Qualified
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-3">
            {
              stats.qualified
            }
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
          <h2 className="text-slate-500">
            Lost
          </h2>

          <p className="text-4xl font-bold text-red-500 mt-3">
            {
              stats.lost
            }
          </p>
        </div>
      </div>
    </Layout>
  );
}
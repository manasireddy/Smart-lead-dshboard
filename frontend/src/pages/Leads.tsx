import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import LeadTable from "../components/LeadTable";

import {
  getLeads,
  deleteLead,
  exportCSV,
} from "../api/leadApi";

import { type Lead } from "../types/lead";

export default function Leads() {
  const [leads, setLeads] =
    useState<Lead[]>(
      []
    );

  const [search, setSearch] =
    useState("");

  const [
    loading,
    setLoading,
  ] = useState(true);

const fetchLeads =
  useCallback(
    async (): Promise<void> => {
      try {
        const data =
          await getLeads();

        setLeads(
          Array.isArray(
            data
          )
            ? data
            : []
        );
      } catch (
        error
      ) {
        console.error(
          error
        );
      } finally {
        setLoading(
          false
        );
      }
    },
    []
  );
 useEffect(() => {
  const loadData =
    async (): Promise<void> => {
      await fetchLeads();
    };

  void loadData();
}, [fetchLeads]);

 const handleDelete =
  async (
    id: string
  ): Promise<void> => {
    const confirmDelete =
      window.confirm(
        "Delete this lead?"
      );

    if (
      !confirmDelete
    )
      return;

    try {
      await deleteLead(
        id
      );

      // refetch instead of setState
      await fetchLeads();
    } catch (
      error
    ) {
      console.error(
        "Delete failed:",
        error
      );
    }
  };
  const filteredLeads =
    leads.filter(
      (lead) =>
        lead.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        lead.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  if (loading) {
    return (
      <Layout>
        <p className="text-lg">
          Loading leads...
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-800">
          Leads
        </h1>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search leads..."
            value={
              search
            }
            onChange={(
              e
            ) =>
              setSearch(
                e.target
                  .value
              )
            }
            className="border border-slate-300 rounded-xl px-4 py-3 w-72 focus:outline-none focus:ring-2 focus:ring-slate-700"
          />

          <Link
            to="/create-lead"
            className="bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition"
          >
            + Create Lead
          </Link>
        </div>
      </div>

      <LeadTable
        leads={
          filteredLeads
        }
        onDelete={
          handleDelete
        }
      />

      <button
  onClick={
    async () => {
      const blob =
        await exportCSV();

      const url =
        window.URL.createObjectURL(
          blob
        );

      const link =
        document.createElement(
          "a"
        );

      link.href =
        url;

      link.download =
        "leads.csv";

      link.click();
    }
  }
  className="bg-green-600 text-white px-5 py-3 rounded-xl"
>
  Export CSV
</button>
    </Layout>
  );
}
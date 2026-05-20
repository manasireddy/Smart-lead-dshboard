import { useNavigate } from "react-router-dom";
import { type Lead } from "../types/lead";

interface Props {
  leads: Lead[];
  onDelete: (
    id: string
  ) => void;
}

export default function LeadTable({
  leads,
  onDelete,
}: Props) {
  const navigate =
    useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-5 text-left">
                Name
              </th>

              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Status
              </th>

              <th className="p-5 text-left">
                Source
              </th>

              <th className="p-5 text-left">
                Created At
              </th>

              <th className="p-5 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(
              leads
            ) &&
            leads.length >
              0 ? (
              leads.map(
                (
                  lead
                ) => (
                  <tr
                    key={
                      lead._id
                    }
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-5">
                      {
                        lead.name
                      }
                    </td>

                    <td className="p-5">
                      {
                        lead.email
                      }
                    </td>

                    <td className="p-5">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          lead.status ===
                          "New"
                            ? "bg-blue-100 text-blue-700"
                            : lead.status ===
                              "Contacted"
                            ? "bg-yellow-100 text-yellow-700"
                            : lead.status ===
                              "Qualified"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {
                          lead.status
                        }
                      </span>
                    </td>

                    <td className="p-5">
                      {
                        lead.source
                      }
                    </td>

                    <td className="p-5">
                      {lead.createdAt
                        ? new Date(
                            lead.createdAt
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>

                    <td className="p-5">
                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            navigate(
                              `/lead/${lead._id}`
                            )
                          }
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm hover:bg-blue-200 transition"
                        >
                          View
                        </button>

                        <button
                          onClick={() =>
                            navigate(
                              `/edit-lead/${lead._id}`
                            )
                          }
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm hover:bg-green-200 transition"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            onDelete(
                              lead._id!
                            )
                          }
                          className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm hover:bg-red-200 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-10 text-slate-500"
                >
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
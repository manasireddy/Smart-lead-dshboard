import { useState } from "react";
import { type Lead } from "../types/lead";

interface Props {
  initialData?: Lead;
  onSubmit: (
    data: Lead
  ) => void;
}

export default function LeadForm({
  initialData,
  onSubmit,
}: Props) {
  const [form, setForm] =
    useState<Lead>({
      name:
        initialData?.name ||
        "",

      email:
        initialData?.email ||
        "",

      status:
        initialData?.status ||
        "New",

      source:
        initialData?.source ||
        "Website",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement
    >
  ) => {
    const {
      name,
      value,
    } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<
      HTMLFormElement
    >
  ) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim()
    ) {
      alert(
        "Name and Email are required"
      );

      return;
    }

    onSubmit(form);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl ">
      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={
              handleChange
            }
            className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-700"
            placeholder="Enter lead name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={
              handleChange
            }
           className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-700"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Status
          </label>

          <select
            name="status"
            value={
              form.status
            }
            onChange={
              handleChange
            }
            className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="New">
              New
            </option>

            <option value="Contacted">
              Contacted
            </option>

            <option value="Qualified">
              Qualified
            </option>

            <option value="Lost">
              Lost
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Source
          </label>

          <select
            name="source"
            value={
              form.source
            }
            onChange={
              handleChange
            }
           className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="Website">
              Website
            </option>

            <option value="Instagram">
              Instagram
            </option>

            <option value="Referral">
              Referral
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800"
        >
          Save Lead
        </button>
      </form>
    </div>
  );
}
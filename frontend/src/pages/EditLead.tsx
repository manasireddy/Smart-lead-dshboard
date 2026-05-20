import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Layout from "../components/Layout";
import LeadForm from "../components/LeadForm";

import { type Lead } from "../types/lead";

import {
  getLeadById,
  updateLead,
} from "../api/leadApi";

export default function EditLead() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [lead, setLead] =
    useState<Lead | null>(
      null
    );

  useEffect(() => {
    if (id) {
      getLeadById(id).then(
        setLead
      );
    }
  }, [id]);

  const handleSubmit =
    async (
      data: Lead
    ) => {
      if (!id) return;

      await updateLead(
        id,
        data
      );

      navigate("/leads");
    };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Edit Lead
      </h1>

      {lead && (
        <LeadForm
          initialData={lead}
          onSubmit={handleSubmit}
        />
      )}
    </Layout>
  );
}
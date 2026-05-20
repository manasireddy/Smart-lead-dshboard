import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import LeadForm from "../components/LeadForm";
import { createLead } from "../api/leadApi";
import { type Lead } from "../types/lead";
import toast from "react-hot-toast";

export default function CreateLead() {
  const navigate = useNavigate();

  const handleSubmit = async (
    data: Lead
  ) => {
    await createLead(data);

toast.success(
  "Lead created successfully"
);

navigate("/leads");
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Create Lead
      </h1>

      <LeadForm
        onSubmit={handleSubmit}
      />
    </Layout>
  );
}
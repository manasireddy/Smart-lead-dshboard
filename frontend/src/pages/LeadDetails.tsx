import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import Layout from "../components/Layout";

import { getLeadById } from "../api/leadApi";
import { type Lead } from "../types/lead";

export default function LeadDetails() {
  const { id } = useParams();

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

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Lead Details
      </h1>

      {lead && (
        <div className="bg-white rounded-xl shadow p-8 max-w-2xl">
          <div className="space-y-4">
            <p>
              <strong>Name:</strong>{" "}
              {lead.name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {lead.email}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {lead.status}
            </p>

            <p>
              <strong>Source:</strong>{" "}
              {lead.source}
            </p>

            <p>
              <strong>
                Created At:
              </strong>{" "}
              {lead.createdAt
                ? new Date(
                    lead.createdAt
                  ).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}
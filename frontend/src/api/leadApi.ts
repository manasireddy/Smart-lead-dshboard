import api from "./axios";
import { type Lead } from "../types/lead";
import axios from "axios";
export const getLeads =
  async (): Promise<
    Lead[]
  > => {
    const response =
      await api.get(
        "/leads"
      );

    return Array.isArray(
      response.data
    )
      ? response.data
      : response.data.data ||
          [];
  };

export const getLeadById =
  async (
    id: string
  ): Promise<Lead> => {
    const response =
      await api.get(
        `/leads/${id}`
      );

    return response.data
      .data ??
      response.data;
  };

export const createLead =
  async (
    data: Lead
  ): Promise<Lead> => {
    const response =
      await api.post(
        "/leads",
        data
      );

    return response.data;
  };

export const updateLead =
  async (
    id: string,
    data: Lead
  ): Promise<Lead> => {
    const response =
      await api.put(
        `/leads/${id}`,
        data
      );

    return response.data;
  };

export const deleteLead =
  async (
    id: string
  ): Promise<void> => {
    await api.delete(
      `/leads/${id}`
    );
  };

  export const getDashboardStats =
  async () => {
    const response =
      await axios.get(
        "/leads/stats/dashboard"
      );

    return response.data;
  };

export const exportCSV =
  async () => {
    const response =
      await axios.get(
        "/leads/export/csv",
        {
          responseType:
            "blob",
        }
      );

    return response.data;
  };
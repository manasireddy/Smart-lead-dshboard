import express from "express";

import {
  createLead,
  deleteLead,
  getLeadById,
  getLeads,
  updateLead,
  exportLeadsCSV,
  getDashboardStats,
} from "../controllers/lead.controller";

import {
  protect,
} from "../middleware/auth.middleware";

import {
  authorize,
} from "../middleware/role.middleware";

const router =
  express.Router();

router.use(
  protect
);

// Get all leads
router.get(
  "/",
  getLeads
);

// Dashboard stats
router.get(
  "/stats/dashboard",
  getDashboardStats
);

// Export CSV
router.get(
  "/export/csv",
  exportLeadsCSV
);

// Get single lead
router.get(
  "/:id",
  getLeadById
);

// Create lead
router.post(
  "/",
  authorize([
    "Admin",
  ]),
  createLead
);

// Update lead
router.put(
  "/:id",
  authorize([
    "Admin",
  ]),
  updateLead
);

// Delete lead
router.delete(
  "/:id",
  authorize([
    "Admin",
  ]),
  deleteLead
);

export default router;
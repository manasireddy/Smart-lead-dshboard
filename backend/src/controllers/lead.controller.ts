import {
  Request,
  Response,
} from "express";

import Lead from "../models/Lead.model";
import {
  type SortOrder,
} from "mongoose";
import { Parser } from "json2csv";

export const createLead =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const lead =
        await Lead.create(
          req.body
        );

      res
        .status(
          201
        )
        .json(
          lead
        );
    } catch (
      error
    ) {
      res
        .status(
          500
        )
        .json({
          message:
            "Failed to create lead",
          error,
        });
    }
  };

export const getLeads =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const page =
        Number(
          req.query
            .page
        ) || 1;

      const limit = 10;

      const skip =
        (
          page -
          1
        ) *
        limit;

      const search =
        req.query
          .search as string;

      const status =
        req.query
          .status as string;

      const source =
        req.query
          .source as string;

      const sort =
        req.query
          .sort as string;

      const query: Record<
        string,
        unknown
      > = {};

      // Search
      if (
        search
      ) {
        query.$or =
          [
            {
              name: {
                $regex:
                  search,
                $options:
                  "i",
              },
            },
            {
              email:
                {
                  $regex:
                    search,
                  $options:
                    "i",
                },
            },
          ];
      }

      // Status Filter
      if (
        status
      ) {
        query.status =
          status;
      }

      // Source Filter
      if (
        source
      ) {
        query.source =
          source;
      }

     const sortOption: Record<
  string,
  SortOrder
> = {
  createdAt:
    sort ===
    "oldest"
      ? 1
      : -1,
};

      const total =
        await Lead.countDocuments(
          query
        );

      const leads =
        await Lead.find(
          query
        )
          .sort(
            sortOption
          )
          .skip(
            skip
          )
          .limit(
            limit
          );

      res.json({
        data:
          leads,
        total,
        page,
        totalPages:
          Math.ceil(
            total /
              limit
          ),
      });
    } catch (
      error
    ) {
      res
        .status(
          500
        )
        .json({
          message:
            "Failed to fetch leads",
          error,
        });
    }
  };

export const getLeadById =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const lead =
        await Lead.findById(
          req.params.id
        );

      if (
        !lead
      ) {
        res
          .status(
            404
          )
          .json({
            message:
              "Lead not found",
          });

        return;
      }

      res.json(
        lead
      );
    } catch (
      error
    ) {
      res
        .status(
          500
        )
        .json({
          message:
            "Error fetching lead",
          error,
        });
    }
  };

export const updateLead =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const lead =
        await Lead.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(
        lead
      );
    } catch (
      error
    ) {
      res
        .status(
          500
        )
        .json({
          message:
            "Update failed",
          error,
        });
    }
  };

export const deleteLead =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      await Lead.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Lead deleted",
      });
    } catch (
      error
    ) {
      res
        .status(
          500
        )
        .json({
          message:
            "Delete failed",
          error,
        });
    }
  };

  export const getDashboardStats =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const totalLeads =
        await Lead.countDocuments();

      const qualified =
        await Lead.countDocuments(
          {
            status:
              "Qualified",
          }
        );

      const lost =
        await Lead.countDocuments(
          {
            status:
              "Lost",
          }
        );

      res.json({
        totalLeads,
        qualified,
        lost,
      });
    } catch (
      error
    ) {
      res
        .status(
          500
        )
        .json({
          message:
            "Failed to fetch dashboard stats",
          error,
        });
    }
  };

  export const exportLeadsCSV =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const leads =
        await Lead.find();

      const fields = [
        "name",
        "email",
        "status",
        "source",
        "createdAt",
      ];

      const parser =
        new Parser({
          fields,
        });

      const csv =
        parser.parse(
          leads
        );

      res.header(
        "Content-Type",
        "text/csv"
      );

      res.attachment(
        "leads.csv"
      );

      res.send(
        csv
      );
    } catch (
      error
    ) {
      res
        .status(
          500
        )
        .json({
          message:
            "CSV export failed",
          error,
        });
    }
  };
import jwt from "jsonwebtoken";

import {
  NextFunction,
  Request,
  Response,
} from "express";

export interface AuthRequest
  extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const protect =
  (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const authHeader =
        req.headers
          .authorization;

      if (
        !authHeader ||
        !authHeader.startsWith(
          "Bearer "
        )
      ) {
        res
          .status(
            401
          )
          .json({
            message:
              "Unauthorized",
          });

        return;
      }

      const token =
        authHeader.split(
          " "
        )[1];

      const decoded =
        jwt.verify(
          token,
          process.env
            .JWT_SECRET as string
        ) as {
          id: string;
          role: string;
        };

      req.user =
        decoded;

      next();
    } catch {
      res
        .status(
          401
        )
        .json({
          message:
            "Invalid token",
        });
    }
  };
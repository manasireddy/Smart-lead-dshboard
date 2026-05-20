import bcrypt from "bcryptjs";

import {
  Request,
  Response,
} from "express";

import User from "../models/User.model";

import { generateToken } from "../utils/generateToken";

export const register =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const {
        name,
        email,
        password,
        role,
      } = req.body;

      const existingUser =
        await User.findOne(
          {
            email,
          }
        );

      if (
        existingUser
      ) {
        res
          .status(
            400
          )
          .json({
            message:
              "User already exists",
          });

        return;
      }

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      const user =
        await User.create(
          {
            name,
            email,
            password:
              hashedPassword,
            role,
          }
        );

      const token =
        generateToken(
          user._id.toString(),
          user.role
        );

      res.status(
        201
      ).json({
        token,
        user,
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
            "Registration failed",
          error,
        });
    }
  };

export const login =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const {
        email,
        password,
      } = req.body;

      const user =
        await User.findOne(
          {
            email,
          }
        );

      if (!user) {
        res
          .status(
            404
          )
          .json({
            message:
              "User not found",
          });

        return;
      }

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (
        !isMatch
      ) {
        res
          .status(
            401
          )
          .json({
            message:
              "Invalid credentials",
          });

        return;
      }

      const token =
        generateToken(
          user._id.toString(),
          user.role
        );

      res.json({
        token,
        user,
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
            "Login failed",
          error,
        });
    }
  };
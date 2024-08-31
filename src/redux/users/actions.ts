import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "services/users-api";

export const getUsers = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const users = await userAPI.getUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
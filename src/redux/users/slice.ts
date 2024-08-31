import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./actions";

interface UsersState {
  items: TUser[];
  filter: TFilter;
  isLoading: boolean;
}

type TUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};

type TFilter = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

const initialState: UsersState = {
  items: [],
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<TUser[]>) => {
        state.items = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export const usersReducer = usersSlice.reducer;
export const { setFilter } = usersSlice.actions;

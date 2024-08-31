import { TUser } from "types/User.type";
import { TFilter } from "types/Filter.type";

interface UsersState {
  users: { items: TUser[]; filter: TFilter; isLoading: boolean };
};


export const getAll = (state: UsersState) => {
  let filteredUsers = state.users.items;

  if (state.users.filter.name !== "") {
    const normalizedName = state.users.filter.name.toLowerCase();
    filteredUsers = filteredUsers.filter((user: any) =>
      user.name.toLowerCase().includes(normalizedName)
    );
  }

  if (state.users.filter.username !== "") {
    const normalizedUsername = state.users.filter.username.toLowerCase();
    filteredUsers = filteredUsers.filter((user: any) =>
      user.username.toLowerCase().includes(normalizedUsername)
    );
  }

  if (state.users.filter.email !== "") {
    const normalizedEmail = state.users.filter.email.toLowerCase();
    filteredUsers = filteredUsers.filter((user: any) =>
      user.email.toLowerCase().includes(normalizedEmail)
    );
  }

  if (state.users.filter.phone !== "") {
    const normalizedPhone = state.users.filter.phone.toLowerCase();
    filteredUsers = filteredUsers.filter((user: any) =>
      user.phone.toLowerCase().includes(normalizedPhone)
    );
  }

  return filteredUsers;
};

export const getIsLoading = (state: UsersState) => state.users.isLoading;

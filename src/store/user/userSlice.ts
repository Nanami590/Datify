import { FirstTryForm } from "@/entities/common/FirstTry/types";
import { USER_STORAGE_DATA } from "@/entities/common/constant";
import { LocalStorageHelper } from "@/utils/helpers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IUser {
  data: FirstTryForm | null;
  isLoading: boolean;
}

const initialState: IUser = {
  data: JSON.parse(LocalStorageHelper.getItem(USER_STORAGE_DATA) || "null"),
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<FirstTryForm | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = userSlice.actions;

export const selectUser = (state: RootState) => state;

export default userSlice.reducer;

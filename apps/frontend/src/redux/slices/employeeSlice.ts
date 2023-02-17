import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "@services/apiClient";
import { Employee } from "src/types/employee";

export interface EmployeeState {
  loading: boolean;
  list: Employee[];
  pagination: {
    page: number;
    totalPages: number;
  };
  filter: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    age: number | null;
    gender: "m" | "f" | null;
  };
}

const initialState: EmployeeState = {
  loading: false,
  list: [],
  pagination: {
    page: 1,
    totalPages: 1,
  },
  filter: {
    firstName: "",
    lastName: "",
    email: "",
    age: null,
    gender: null,
  },
};

export const getEmployees = createAsyncThunk("employee/getEmployees", async (page: number) => {
  const response = await apiClient("get", `/employee?page=${page}&limit=8`);
  if (response.success) {
    return response.data;
  }
});

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.employees;
        state.pagination = action.payload.pagination;
      });
  },
});

export const { setFilter, resetFilter } = employeeSlice.actions;

export default employeeSlice.reducer;

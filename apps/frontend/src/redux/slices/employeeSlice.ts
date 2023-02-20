import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "@services/apiClient";
import { Employee } from "src/types/employee";
import queryString from "query-string";
import { AppState } from "@redux/store";
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
    phone: string | null;
    gender: "m" | "f" | null;
  };

  sort: string | null;
}

const initialState: EmployeeState = {
  loading: true,
  list: [],
  pagination: {
    page: 1,
    totalPages: 1,
  },
  filter: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    gender: null,
  },
  sort: null,
};

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (page: number, { getState, rejectWithValue }) => {
    const {
      employee: { filter, sort },
    } = getState() as AppState;

    const query = queryString.stringify({ ...filter, sort, page, limit: 8 });

    const response = await apiClient("get", `/employee?${query}`);
    if (response.success) {
      return response.data;
    } else {
      return rejectWithValue(response.data);
    }
  }
);

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

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    resetEmployeeView: () => {
      return { ...initialState };
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
      })
      .addCase(getEmployees.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setFilter, resetFilter, setSort, resetEmployeeView } = employeeSlice.actions;

export default employeeSlice.reducer;

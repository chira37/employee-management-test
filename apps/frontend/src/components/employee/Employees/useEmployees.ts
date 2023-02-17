import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { getEmployees } from "@redux/slices/employeeSlice";
import apiClient from "@services/apiClient";

export const useEmployees = () => {
  const dispatch = useAppDispatch();
  const { list: employees, loading, pagination } = useAppSelector((store) => store.employee);

  const handleChangePage = (page: number) => {
    dispatch(getEmployees(page));
  };

  const handleDeleteEmployee = async (id: string | null) => {
    const response = await apiClient("delete", `/employee/${id}`);
    if (response.success) {
      dispatch(getEmployees(1));
    }
  };

  useEffect(() => {
    dispatch(getEmployees(1));
  }, [dispatch]);

  return {
    employees,
    loading,
    pagination,
    handleChangePage,
    handleDeleteEmployee,
  };
};

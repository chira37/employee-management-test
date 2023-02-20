import { yupResolver } from "@hookform/resolvers/yup";
import apiClient from "@services/apiClient";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Employee } from "src/types/employee";
import { employeeSchema } from "./schema";

export const useEmployee = (edit: boolean) => {
  const router = useRouter();
  const { id } = router.query;

  const { control, handleSubmit, reset } = useForm<Employee>({
    resolver: yupResolver(employeeSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", gender: "" },
  });

  const [loading, setLoading] = useState(false);

  const submit = handleSubmit(async (data) => {
    setLoading(true);
    let response;
    if (edit) response = await apiClient("put", `/employee/${id}`, data);
    else response = await apiClient("post", "/employee", data);
    if (response.success) {
      router.push("/employee/list");
    } else {
      alert(response?.message);
    }
    setLoading(false);
  });

  useEffect(() => {
    const init = async () => {
      const response = await apiClient("get", `/employee/${id}`);
      if (response.success) {
        const { firstName, lastName, email, phone, gender } = response.data;
        reset({
          firstName,
          lastName,
          email,
          phone,
          gender,
        });
      }
    };
    if (id && edit) init();
  }, [id, edit, reset]);

  return {
    control,
    submit,
    loading,
  };
};

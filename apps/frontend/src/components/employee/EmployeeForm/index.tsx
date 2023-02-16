import Button from "@components/common/Button";
import Box from "@mui/material/Box";
import { Input } from "@components/common/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Employee } from "src/types/employee";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "./schema";
import { FormaLabel, Row } from "./styled";
import { Select } from "@components/common/Select";
import { MenuItem } from "@mui/material";

interface EmployeeFormProps {
  edit?: boolean;
  initialValues?: Employee;
}

const EmployeeForm = (props: EmployeeFormProps) => {
  const { edit, initialValues } = props;
  const { control, handleSubmit } = useForm({ defaultValues: initialValues, resolver: yupResolver(employeeSchema) });

  const [loading, setLoading] = useState(false);

  const submit = handleSubmit(() => {});

  return (
    <>
      <Row>
        <FormaLabel>First Name</FormaLabel>
        <Input name="firstName" control={control} />
      </Row>
      <Row>
        <FormaLabel>Last Name</FormaLabel>
        <Input name="lastName" control={control} />
      </Row>
      <Row>
        <FormaLabel>Email</FormaLabel>
        <Input name="email" control={control} />
      </Row>
      <Row>
        <FormaLabel>Phone</FormaLabel>
        <Input name="phone" control={control} />
      </Row>
      <Row>
        <FormaLabel>Gender</FormaLabel>
        <Select name="gender" control={control}>
          <MenuItem value="m">Male</MenuItem>
          <MenuItem value="f">Female</MenuItem>
        </Select>
      </Row>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="outlined" loading={loading} onClick={submit}>
          {edit ? "Save" : "Add"}
        </Button>
      </Box>
    </>
  );
};

export default EmployeeForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Input from "@components/common/Input";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Select from "@components/common/Select";
import { useAppDispatch } from "@redux/store";
import { resetFilter, setFilter } from "@redux/slices/employeeSlice";
import { Employee } from "src/types/employee";
import { Container, Label, Row } from "./styled";

const Filter = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const { control, handleSubmit, reset } = useForm<Employee>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
    },
  });

  const submit = handleSubmit((data) => {
    dispatch(setFilter(data));
    handleClose();
  });

  const handleReset = () => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
    });
    dispatch(resetFilter());
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} size="small" startIcon={<FilterAltIcon />}>
        Filter
      </Button>
      <Popover
        id="filter"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transitionDuration={100}
      >
        <Container>
          <Row>
            <Label>First Name</Label>
            <Input name="firstName" control={control} />
          </Row>
          <Row>
            <Label>Last Name</Label>
            <Input name="lastName" control={control} />
          </Row>
          <Row>
            <Label>Email</Label>
            <Input name="email" control={control} />
          </Row>
          <Row>
            <Label>Phone</Label>
            <Input name="phone" control={control} />
          </Row>
          <Row>
            <Label>Gender</Label>
            <Select select name="gender" control={control}>
              <MenuItem value="m">Male</MenuItem>
              <MenuItem value="f">Female</MenuItem>
            </Select>
          </Row>
          <Stack spacing={1} direction="row" display="flex" justifyContent="flex-end">
            <Button variant="outlined" onClick={handleReset}>
              Reset
            </Button>
            <Button onClick={submit}>Apply</Button>
          </Stack>
        </Container>
      </Popover>
    </div>
  );
};

export default Filter;

import { useState } from "react";
import { useForm } from "react-hook-form";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import SortIcon from "@mui/icons-material/Sort";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Select from "@components/common/Select";
import { useAppDispatch } from "@redux/store";
import { setSort } from "@redux/slices/employeeSlice";
import { Container, Row } from "./styled";

const Sort = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      key: "default",
      order: "default",
    },
  });

  const submit = handleSubmit((data) => {
    if (data.key !== "default" && data.order !== "default") {
      dispatch(setSort(`${data.order === "asc" ? "" : "-"}${data.key}`));
    }
    handleClose();
  });

  const handleReset = () => {
    dispatch(setSort(null));
    reset({
      key: "default",
      order: "default",
    });
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} size="small" startIcon={<SortIcon />}>
        Sort
      </Button>
      <Popover
        id={"sort"}
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
          <Stack direction="row" spacing={2} mb={2}>
            <Row>
              <Select select name="key" control={control} defaultValue="default">
                <MenuItem disabled value="default">
                  Sort by
                </MenuItem>
                <MenuItem value="firstName">First Name</MenuItem>
                <MenuItem value="lastName">Last Name</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="phone">Phone</MenuItem>
                <MenuItem value="gender">Gender</MenuItem>
              </Select>
            </Row>
            <Row>
              <Select select name="order" control={control} defaultValue="default">
                <MenuItem disabled value="default">
                  Order
                </MenuItem>
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </Row>
          </Stack>

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

export default Sort;

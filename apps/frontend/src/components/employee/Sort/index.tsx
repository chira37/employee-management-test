import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { Input } from "@components/common/Input";
import { useForm } from "react-hook-form";
import { Label, Row } from "./styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@components/common/Select";
import { useAppDispatch } from "@redux/store";
import { resetFilter, setFilter } from "@redux/slices/employeeSlice";
import { Box, Stack } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
const Sort = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { control, handleSubmit, reset } = useForm();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const submit = handleSubmit((data) => {
    dispatch(setFilter(data));
  });

  const handleReset = () => {
    reset();
    dispatch(resetFilter());
  };

  return (
    <div>
      <Button onClick={handleClick} size="small" startIcon={<SortIcon />}>
        Sort
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Row>
                <Label variant="caption">First Name</Label>
                <Input margin="dense" name="firstName" control={control} size="small" />
              </Row>
              <Row>
                <Label variant="caption">Last Name</Label>
                <Input name="lastName" control={control} size="small" />
              </Row>
              <Row>
                <Label variant="caption">Email</Label>
                <Input name="email" control={control} size="small" />
              </Row>
              <Row>
                <Label variant="caption">Age</Label>
                <Input name="age" control={control} size="small" />
              </Row>
              <Row>
                <Label variant="caption">Gender</Label>
                <Select select name="gender" control={control} size="small">
                  <MenuItem value="m">Male</MenuItem>
                  <MenuItem value="f">Female</MenuItem>
                </Select>
              </Row>
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" onClick={handleReset}>
              Reset
            </Button>
            <Button size="small" onClick={submit}>
              Apply
            </Button>
          </CardActions>
        </Card>
      </Popover>
    </div>
  );
};

export default Sort;

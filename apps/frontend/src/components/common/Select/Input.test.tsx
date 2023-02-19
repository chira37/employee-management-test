import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select, { SelectProps } from "./index";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";

const MockSelect = (props: Omit<SelectProps, "children">) => {
  const { control } = useForm();
  return (
    <Select control={control} {...props} value={1}>
      <MenuItem value={1}>option 1</MenuItem>
      <MenuItem value={2}>option 2</MenuItem>
    </Select>
  );
};

describe("Select", () => {
  it("render", () => {
    render(<MockSelect name="test" />);
    const selectElement = screen.getByText("option 1");
    expect(selectElement).toBeInTheDocument;
  });
});

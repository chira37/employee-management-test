import { ReactNode } from "react";
import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

import { Controller, Control } from "react-hook-form";

export interface SelectProps extends Omit<OutlinedTextFieldProps, "variant"> {
  children: ReactNode;
  name: string;
  control?: Control<any>;
}

const Select = (props: SelectProps) => {
  const { children, name, title, control, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          select
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          data-testid={name}
          {...rest}
          size="small"
        >
          {children}
        </TextField>
      )}
    />
  );
};

export default Select;

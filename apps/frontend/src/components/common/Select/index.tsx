import { ReactNode } from "react";
import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

import { Controller, Control } from "react-hook-form";

interface SelectProps extends Omit<OutlinedTextFieldProps, "variant"> {
  children: ReactNode;
  name: string;
  control?: Control<any>;
}

export const Select = (props: SelectProps) => {
  const { children, name, title, control, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField select size="small" {...field} fullWidth error={!!error} helperText={error?.message} {...rest}>
          {children}
        </TextField>
      )}
    />
  );
};

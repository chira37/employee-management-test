import TextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

import { Controller, Control } from "react-hook-form";

interface InputProps extends Omit<OutlinedTextFieldProps, "variant"> {
  name: string;
  control?: Control<any>;
}

export const Input = (props: InputProps) => {
  const { name, title, control, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField size="small" {...field} fullWidth error={!!error} helperText={error?.message} {...rest} />
      )}
    />
  );
};

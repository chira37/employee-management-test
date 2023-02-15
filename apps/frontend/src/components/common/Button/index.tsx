import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
}

const Button = ({ loading, children, ...props }: ButtonProps) => {
  return (
    <MuiButton disabled={loading} {...props}>
      {loading && <CircularProgress color="inherit" size={18} sx={{ mr: 1 }} />} {children}
    </MuiButton>
  );
};

export default Button;

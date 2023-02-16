import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "../Button";
import { ActionContainer } from "./styled";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
interface ConfirmDialogProps {
  loading?: boolean;
  title: string;
  description: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const { loading, title, description, open, onConfirm, onCancel } = props;

  return (
    <Dialog open={open} TransitionComponent={Transition} PaperProps={{ sx: { minWidth: 300 } }}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <ActionContainer direction="row" spacing={2}>
        <Button onClick={onCancel} fullWidth variant="outlined">
          Cancel
        </Button>
        <Button onClick={onConfirm} fullWidth loading={loading}>
          Confirm
        </Button>
      </ActionContainer>
    </Dialog>
  );
};

export default ConfirmDialog;

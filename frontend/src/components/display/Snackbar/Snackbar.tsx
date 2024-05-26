import { useEffect, useState } from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { ISnackbarProps } from "../../../types";

export default function Snackbar({
  isOpen,
  message,
  severity,
  autoHideDuration = 6000,
}: ISnackbarProps) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, autoHideDuration);
  }, [setOpen, autoHideDuration]);

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ mt: -1 }}
    >
      <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

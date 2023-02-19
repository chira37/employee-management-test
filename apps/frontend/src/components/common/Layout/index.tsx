import { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface LayoutProps {
  children: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg";
}

const Layout = (props: LayoutProps) => {
  const { children, maxWidth = "md" } = props;
  return (
    <div>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h6">Employee Manager</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth={maxWidth}>{children}</Container>
    </div>
  );
};

export default Layout;

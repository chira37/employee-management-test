import { useState } from "react";
import Button from "@components/common/Button";
import { Box, IconButton } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import GridView from "../GridView";
import { Header, ToggleButton } from "./styled";
import { useRouter } from "next/router";
const Employees = () => {
  const [listView, setListView] = useState(false);

  const router = useRouter();

  const toggleListView = () => setListView(!listView);
  const handleAddEmployee = () => router.push("/employee/new");

  return (
    <div>
      <Header>
        <Button onClick={handleAddEmployee}>Add Employee</Button>
        <ToggleButton onClick={toggleListView}>{listView ? <ViewListIcon /> : <ViewModuleIcon />}</ToggleButton>
      </Header>
      <div>
        <GridView />
      </div>
    </div>
  );
};

export default Employees;

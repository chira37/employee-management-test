import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/common/Button";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ConfirmDialog from "@components/common/ConfirmDialog";
import GridView from "../GridView";
import ListView from "../ListView";
import { Header, ToggleButton } from "./styled";
const Employees = () => {
  const [listView, setListView] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>();

  const router = useRouter();

  const toggleListView = () => setListView(!listView);
  
  const handleAddEmployee = () => router.push("/employee/add");

  const handleDeleteEmployee = async () => {};

  return (
    <div>
      <Header>
        <Button onClick={handleAddEmployee}>Add Employee</Button>
        <ToggleButton onClick={toggleListView}>{listView ? <ViewListIcon /> : <ViewModuleIcon />}</ToggleButton>
      </Header>
      <ConfirmDialog
        open={!!deleteId}
        title="Delete Employee"
        description="Are you sure you want to delete this employee?"
        onCancel={() => setDeleteId(null)}
        onConfirm={handleDeleteEmployee}
      />
      <div>{listView ? <ListView onDelete={setDeleteId} /> : <GridView onDelete={setDeleteId} />}</div>
    </div>
  );
};

export default Employees;

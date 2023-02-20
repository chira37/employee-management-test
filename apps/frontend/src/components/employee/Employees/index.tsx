import { useState } from "react";
import { useRouter } from "next/router";

import Pagination from "@mui/material/Pagination";
import Button from "@components/common/Button";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/CircularProgress";

import ConfirmDialog from "@components/common/ConfirmDialog";
import GridView from "../GridView";
import ListView from "../ListView";
import { useEmployees } from "./useEmployees";
import Filter from "../Filter";
import { Content, Footer, Header, ToggleButton } from "./styled";
import Sort from "../Sort";

const Employees = () => {
  const [listView, setListView] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const router = useRouter();

  const { employees, loading, pagination, handleChangePage, handleDeleteEmployee } = useEmployees();

  const toggleListView = () => setListView(!listView);
  const handleAddEmployee = () => router.push("/employee/add");

  return (
    <div>
      <Header>
        <Stack direction="row" spacing={2}>
          <Filter />
          <Sort />
        </Stack>
        <Stack direction="row">
          <Button onClick={handleAddEmployee}>Add Employee</Button>
          <ToggleButton onClick={toggleListView}>{listView ? <ViewListIcon /> : <ViewModuleIcon />}</ToggleButton>
        </Stack>
      </Header>
      <ConfirmDialog
        open={!!deleteId}
        title="Delete Employee"
        description="Are you sure you want to delete this employee?"
        onCancel={() => setDeleteId(null)}
        onConfirm={() => handleDeleteEmployee(deleteId)}
        onClose={() => setDeleteId(null)}
      />

      {loading && (
        <Content>
          <LinearProgress />
        </Content>
      )}

      {!loading && employees.length === 0 && <Content>No employee found..</Content>}
      {!loading && employees.length > 0 && (
        <div>
          {listView ? (
            <ListView onDelete={setDeleteId} employees={employees} />
          ) : (
            <GridView onDelete={setDeleteId} employees={employees} />
          )}
          <Footer>
            <Pagination
              size="large"
              count={pagination.totalPages}
              variant="outlined"
              shape="rounded"
              onChange={(_, page) => handleChangePage(page)}
              page={pagination.page}
            />
          </Footer>
        </div>
      )}
    </div>
  );
};

export default Employees;

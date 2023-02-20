import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { Employee } from "src/types/employee";
import GridItem from "../GridItem";
interface GridViewProps {
  employees: Employee[];
  onDelete: (id: string) => void;
}

const GridView = (props: GridViewProps) => {
  const { employees, onDelete } = props;
  const router = useRouter();
  const handleEdit = (id: string) => router.push(`/employee/edit/${id}`);
  return (
    <Grid container spacing={3} >
      {employees.map((employee) => (
        <GridItem key={employee._id} onEdit={handleEdit} onDelete={onDelete} employee={employee} />
      ))}
    </Grid>
  );
};

export default GridView;

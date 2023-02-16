import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import GridItem from "../GridItem";
interface GridViewProps {
  onDelete: (id: string) => void;
}

const GridView = (props: GridViewProps) => {
  const { onDelete } = props;
  const router = useRouter();
  const handleEdit = (id: string) => router.push(`/employee/edit/${id}`);
  return (
    <Grid container spacing={5}>
      <GridItem onEdit={handleEdit} onDelete={onDelete} />
      <GridItem onEdit={handleEdit} onDelete={onDelete} />
      <GridItem onEdit={handleEdit} onDelete={onDelete} />
      <GridItem onEdit={handleEdit} onDelete={onDelete} />
      <GridItem onEdit={handleEdit} onDelete={onDelete} />
      <GridItem onEdit={handleEdit} onDelete={onDelete} />
    </Grid>
  );
};

export default GridView;

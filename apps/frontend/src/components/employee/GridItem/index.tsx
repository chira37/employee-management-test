import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { CardActions } from "./styled";
import { Grid } from "@mui/material";
import { Employee } from "src/types/employee";

interface GridItemProps {
  employee: Employee;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const GridItem = (props: GridItemProps) => {
  const { employee, onDelete, onEdit } = props;
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://randomuser.me/api/portraits/men/85.jpg"
        />
        <CardContent>
          <Typography variant="body1">
            {employee.firstName} {employee.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.gender === "m" ? "Male" : "Female"}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => onDelete(employee._id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => onEdit(employee._id)}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridItem;

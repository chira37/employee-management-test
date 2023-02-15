import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { CardActions } from "./styled";
import { Grid } from "@mui/material";
export default function ImgMediaCard() {
  return (
    <Grid item xs={3}>
      <Card >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://randomuser.me/api/portraits/men/85.jpg"
        />
        <CardContent>
          <Typography variant="body1">Test name</Typography>
          <Typography variant="body2" color="text.secondary">
            test@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +94774682747
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Male
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

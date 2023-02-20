import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";
import { Employee } from "src/types/employee";

interface ListViewProps {
  employees: Employee[];
  onDelete: (id: string) => void;
}

const ListView = (props: ListViewProps) => {
  const { employees, onDelete } = props;
  const router = useRouter();
  const handleEdit = (id: string) => router.push(`/employee/edit/${id}`);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">First&nbsp;Name</TableCell>
            <TableCell align="left">Last&nbsp;Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                <Avatar
                  src={
                    employee.photo ||
                    (employee.gender === "m"
                      ? "https://st3.depositphotos.com/9998432/13335/v/1600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
                      : "https://st4.depositphotos.com/9998432/27431/v/1600/depositphotos_274313380-stock-illustration-person-gray-photo-placeholder-woman.jpg")
                  }
                />
              </TableCell>
              <TableCell align="left">{employee.firstName}</TableCell>
              <TableCell align="left">{employee.lastName}</TableCell>
              <TableCell align="left">{employee.email}</TableCell>
              <TableCell align="left">{employee.phone}</TableCell>
              <TableCell align="left"> {employee.gender === "m" ? "Male" : "Female"}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleEdit(employee._id)} color="success">
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton color="error" onClick={() => onDelete(employee._id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ListView;

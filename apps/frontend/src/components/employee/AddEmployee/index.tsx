import { useRouter } from "next/router";
import Button from "@components/common/Button";
import EmployeeForm from "../EmployeeForm";
import { Container, Header } from "./styled";

const AddEmployee = () => {
  const router = useRouter();
  const handleListView = () => router.push("/employee/list");
  return (
    <div>
      <Header>
        <Button onClick={handleListView}>List view</Button>
      </Header>
      <Container>
        <EmployeeForm />
      </Container>
    </div>
  );
};

export default AddEmployee;

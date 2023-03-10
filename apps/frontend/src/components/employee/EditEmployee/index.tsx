import Button from "@components/common/Button";
import { useRouter } from "next/router";
import EmployeeForm from "../EmployeeForm";
import { Container, Header } from "./styled";

const EditEmployee = () => {
  const router = useRouter();
  const handleListView = () => router.push("/employee/list");
  return (
    <div>
      <Header>
        <Button onClick={handleListView}>List view</Button>
      </Header>
      <Container>
        <EmployeeForm edit />
      </Container>
    </div>
  );
};

export default EditEmployee;

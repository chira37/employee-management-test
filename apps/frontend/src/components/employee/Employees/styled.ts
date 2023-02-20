import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const Header = styled("div")`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ToggleButton = styled(IconButton)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: #ffffff;
  margin-left: 15px;
  :hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`;
export const Footer = styled("div")`
  margin: 40px 0;
  display: flex;
  justify-content: flex-end;
`;

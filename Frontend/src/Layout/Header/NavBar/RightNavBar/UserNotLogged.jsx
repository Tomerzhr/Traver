import GlobalButton from "../../../../components/GlobalButton";
import styled from "styled-components";
import ROUTS from "../../../../routes/routesModal";
import { useNavigate } from "react-router-dom";

const UserNotLoggedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function UserNotLogged() {
  const navigate = useNavigate();

  return (
    <UserNotLoggedContainer>
      <GlobalButton
        backgroundColor={"#ffffff"}
        color={"#f3711b"}
        border="#f3711b"
        borderColor={"#f3711b"}
        hover={"#f3711b"}
        onClick={() => {
          navigate(ROUTS.LOGIN);
        }}
      >
        Login
      </GlobalButton>
      <GlobalButton
        backgroundColor={"#f3711b"}
        color={"white"}
        border="#f3711b"
        borderColor={"#f3711b"}
        onClick={() => {
          navigate(ROUTS.SIGNUP);
        }}
      >
        Join to us
      </GlobalButton>
    </UserNotLoggedContainer>
  );
}

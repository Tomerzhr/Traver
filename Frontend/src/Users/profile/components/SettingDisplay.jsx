import styled from "styled-components";
import ChangePassword from "./ChangePassword";
import AccountSettings from "./AccountSettings";

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 10px;
  }
  h2 {
    margin-bottom: 20px;
  }
  hr {
    margin-top: 40px;
    margin-bottom: 40px;
    border: 0.5px solid #e6e6e6;
  }
`;

export default function SettingDisplay() {
  return (
    <SettingContainer>
      <AccountSettings />
      <hr />
      <ChangePassword />
    </SettingContainer>
  );
}

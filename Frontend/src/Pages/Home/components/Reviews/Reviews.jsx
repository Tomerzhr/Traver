import styled from "styled-components";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";

const AboutUsContainer = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20%;
`;

export default function Reviews() {
  return (
    <AboutUsContainer>
      <LeftSection />
      <RightSection />
    </AboutUsContainer>
  );
}

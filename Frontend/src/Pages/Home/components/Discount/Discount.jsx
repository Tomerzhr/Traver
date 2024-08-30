import styled from "styled-components";
import GlobalButton from "../../../../components/GlobalButton";

const DiscountContainer = styled.section`
  margin: 30px 0;
  background-color: #fef2ea;
  line-height: 2rem;
  border-radius: 30px;
  text-align: center;
  padding: 30px 30px;

  h2 {
    font-weight: 800;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  p {
    font-size: 0.7rem;
    font-weight: 300;
    color: #757575;
  }
`;

export default function Discount() {
  return (
    <DiscountContainer>
      <h2>Lets Dont Miss The 50% Discount &</h2>
      <h3>Explore the Beauty of the World</h3>
      <p>We have many special offers especially for you</p>
      <GlobalButton backgroundColor="#f3711b">Book Now</GlobalButton>
    </DiscountContainer>
  );
}

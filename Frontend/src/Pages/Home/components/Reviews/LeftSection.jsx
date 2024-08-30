import styled from "styled-components";
import PageTitle from "../../../../components/PageTitle";
import quote from "../../../../assets/icons/quote.png";

const LeftSectionContainer = styled.div`
  width: 40%;
  .review {
    position: relative;
    background-color: #f4f4f4;
    border-radius: 15px;
    padding: 10px;
    font-size: 0.8rem;
    line-height: 1.2rem;
    margin-top: 10px;

    .quote {
      position: absolute;
      top: -30px;
      right: 10px;
      width: 50px;
      height: 50px;
      opacity: 0.5;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #000000;
      }
      h2 {
        font-size: 0.8rem;
        font-weight: 600;
      }
      p {
        font-size: 0.7rem;
        font-weight: 300;
      }
    }
  }
  hr {
    border: 0.5px solid #e6e6e6;
    margin: 10px;
  }
  p {
    font-size: 0.7rem;
    font-weight: 300;
    color: #757575;
  }
`;

export default function LeftSection() {
  return (
    <LeftSectionContainer>
      <PageTitle
        topTitle="What They Say"
        title="What our Customers"
        titlePartOne=" Say About Us"
        titlePartTwo={""}
        subtitlePartOne={""}
        subtitlePartTwo={""}
      />

      <div className="review">
        <img className="quote" src={quote} alt="quote icon" />
        <div className="user">
          <img src="" alt="" />
          <div>
            <h2>Tomer Zohar</h2>
            <p>Travel Expert</p>
          </div>
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem a, porro
          architecto atque est enim nobis eaque at, facere tempore corrupti qui ab laboriosam quidem
          deleniti animi ad vel?
        </p>
      </div>
    </LeftSectionContainer>
  );
}

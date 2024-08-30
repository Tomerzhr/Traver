import { useParams, useNavigate } from "react-router-dom";
import useTours from "./hooks/UseTours";
import { useEffect } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import PageTitle from "../../components/PageTitle";
import Spinner from "../../components/Spinner";
import GlobalButton from "../../components/GlobalButton";
import ROUTS from "../../routes/routesModal";
import { UseUserProvider } from "../../Users/providers/userProvider";
import { formatDateFromInput } from "./util/formatDate";

const TourPageDetailsContainer = styled.div`
  .context {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 15px;

    img {
      width: 15px;
    }
  }
  .topDetails {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 20px;
  }

  .mainDetails {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .right {
    background-color: #ffffff;
    text-align: start;
    h3 {
      margin-bottom: 10px;
    }
    p {
      font-size: 0.8rem;
      font-weight: 300;
      color: #9d9d9d;
    }
  }
  .left {
    padding: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;

    p {
      font-size: 0.8rem;
      font-weight: 800;
      text-align: start;
      line-height: 2;
      text-transform: capitalize;

      span {
        font-weight: 300;
      }
    }
  }
  .tourImages {
    display: grid;
    gap: 10px;
    margin: 20px 0px;
    position: relative;
    img {
      width: 100%;
      border-radius: 15px;
      padding: 5px;
      border: 1px solid #eaeaea;
      background-color: white;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.068);
    }
  }
`;

export default function TourPageDetails() {
  const { tourId } = useParams();
  const navigate = useNavigate(); // Correctly get the navigate function
  const { user } = UseUserProvider();

  const {
    values: { tour },
    handelGetTour,
    loading,
  } = useTours();

  useEffect(() => {
    handelGetTour(tourId);
  }, [handelGetTour, tourId]);

  if (!tour || loading) {
    return <Spinner />;
  }

  return (
    <TourPageDetailsContainer>
      {tour && (
        <PageTitle
          topTitle="About the tour"
          title={tour.name}
          titlePartOne={tour.startLocation.description}
          subtitlePartOne="More details about the tour"
          margin="50px 0px"
        />
      )}

      <Box className="mainDetails" sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box
          className="left"
          sx={{
            width: { xs: "100%", md: "30%" },
          }}
        >
          <div className="insert">
            <PageTitle topTitle={tour?.name} title="Quick Facts" />
            <p>
              Next Date :{" "}
              <span>{tour?.startDates ? formatDateFromInput(String(tour.startDates)) : ""}</span>
            </p>
            <p>
              Difficulty : <span>{tour?.difficulty}</span>
            </p>
            <p>
              Time Duration : <span>{tour?.duration}</span>
            </p>
            <p>
              Participants : <span>{tour?.maxGroupSize}</span>
            </p>
            <p>
              Rating : <span>{tour?.ratingsAverage} / 5</span>
            </p>
            <p>
              Price : <span>{tour?.price} $</span>
            </p>
            <GlobalButton margin="10px 0" onClick={() => navigate(`${ROUTS.REVIEWS}/${tour.id}`)}>
              Reviews
            </GlobalButton>
          </div>
        </Box>

        <Box
          className="right"
          sx={{
            width: { xs: "100%", md: "70%" },
            padding: { xs: "20px 0px", md: "0px 20px" },
          }}
        >
          <h3>About</h3>
          <p>{tour?.description}</p>
        </Box>
      </Box>
      <Box className="tourImages" sx={{ gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" } }}>
        {tour.images.slice(0, 3).map((image, index) => (
          <img key={index} src={image} alt={`tour image ${index}`} />
        ))}
      </Box>
      <GlobalButton
        onClick={() => {
          window.history.back();
        }}
      >
        Go Back to Tours
      </GlobalButton>
      {user && user.role === "admin" && (
        <GlobalButton
          onClick={() => navigate(`${ROUTS.EDIT_TOUR}/${tour.id}`)} // Correct usage of navigate
          backgroundColor="#f3711b"
          color="#ffffff"
          fontWeight="400"
          fontSize="0.6rem"
        >
          Edit
        </GlobalButton>
      )}
    </TourPageDetailsContainer>
  );
}

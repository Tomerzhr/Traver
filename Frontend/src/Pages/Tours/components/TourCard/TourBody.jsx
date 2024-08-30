import styled from "styled-components";
import PlaceIcon from "@mui/icons-material/Place";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PropTypes from "prop-types";
import { formatDateFromInput } from "../../util/formatDate";

const TourBodyContainer = styled.div`
  padding: 10px;
  font-size: 0.7rem;
  line-height: 1.5;

  .topTitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    h2 {
      font-size: 0.8rem;
    }
    h3 {
      background-color: #feefe4;
      border: 1px solid #f3711b;
      color: #f3711b;
      border-radius: 5px;
      font-size: 0.6rem;
      padding: 3px 6px;
      font-weight: 600;
      margin-left: 5px;
    }
    h5 {
      color: #adadad;
      font-weight: 400;
      text-transform: capitalize;
    }
  }
  .details {
    font-style: italic;
    font-weight: 300;
    line-break: auto;
  }
  .iconDetail {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0;

    svg {
      color: #f3711b;
      font-size: 1rem;
    }
    text-align: left;
    font-weight: 300;
  }
`;

export default function TourBody({ tour }) {
  const {
    name,
    duration,
    difficulty,
    summary,
    startLocation: { description },
    locations,
    maxGroupSize,
    price,
    startDates,
  } = tour;

  return (
    <TourBodyContainer>
      <div className="topTitle">
        <div className="titles">
          <h2>{name}</h2>
          <h5>
            {difficulty} {duration}-Day Tour
          </h5>
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>
      </div>

      <p className="details">{summary}</p>
      <div className="iconDetail">
        <PlaceIcon />
        <p>{description}</p>
      </div>
      <div className="iconDetail">
        <EditCalendarIcon />
        <p>{formatDateFromInput(startDates[0])}</p>
      </div>
      <div className="iconDetail">
        <AvTimerIcon />
        <p>{locations.length} stops</p>
      </div>
      <div className="iconDetail">
        <PermIdentityIcon />
        <p>{maxGroupSize} people</p>
      </div>
    </TourBodyContainer>
  );
}

TourBody.propTypes = {
  tour: PropTypes.object.isRequired,
};

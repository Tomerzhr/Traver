import PropTypes from "prop-types";
import Spinner from "../../../components/Spinner";
import Error from "../../../components/Error";
import EmptyToursCard from "./EmptyToursCards";
import Tours from "./Tours";

export default function ToursFeedback({ tours, loading, error, onDelete }) {
  if (loading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (tours && tours.length === 0) return <EmptyToursCard />;
  if (tours && tours.length > 0) return <Tours tours={tours} onDelete={onDelete} />;
}

ToursFeedback.propTypes = {
  tours: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  onDelete: PropTypes.func,
};

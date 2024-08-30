import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTours from "./hooks/UseTours";
import { useForm } from "react-hook-form";
import Spinner from "../../components/Spinner";
import TourForm from "./components/TourForm";

export default function EditTour() {
  const { handelGetTour, handelUpdateTour, loading } = useTours();
  const { tourId } = useParams();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      images: [],
      locations: [],
    },
  });

  const { reset } = methods;

  useEffect(() => {
    const fetchTourData = async () => {
      const data = await handelGetTour(tourId);
      reset(data);
      console.log(data);
    };
    fetchTourData();
  }, [tourId, handelGetTour, methods, reset]);

  if (loading) {
    return <Spinner />;
  }

  const onSubmit = (data) => {
    handelUpdateTour(data);
    navigate(`/tour-info/${tourId}`);
  };

  return <TourForm title="Edit Tour" methods={methods} onSubmit={onSubmit} buttonText="Update" />;
}

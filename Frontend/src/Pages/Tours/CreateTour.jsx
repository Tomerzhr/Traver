import { useForm } from "react-hook-form";
import useTours from "./hooks/UseTours";
import { useNavigate } from "react-router-dom";
import TourForm from "./components/TourForm";

export default function CreateTour() {
  const { handelCreateTour } = useTours();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      locations: [
        {
          name: "Location Name",
          type: "Point",
          coordinates: ["Latitude, Longitude"],
          description: "City, Country",
          day: 0,
        },
      ],
      images: ["https://", "https://", "https://"],
    },
  });

  const { reset } = methods;

  const onSubmit = (data) => {
    handelCreateTour(data);
    reset();
    navigate("/tours");
  };

  return <TourForm title="Create Tour" methods={methods} onSubmit={onSubmit} buttonText="Create" />;
}

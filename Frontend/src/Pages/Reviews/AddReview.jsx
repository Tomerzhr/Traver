import { useForm } from "react-hook-form";
import PageTitle from "../../components/PageTitle";
import Input from "../../Forms/Input";
import { schema } from "./utils/schema";
import { Box } from "@mui/material";
import GlobalButton from "../../components/GlobalButton";
import useReviews from "./hooks/UseReviews";
import { useParams, useNavigate } from "react-router-dom";

export default function AddReview() {
  const { handelAddReview } = useReviews();
  const { tourId } = useParams();
  const navigate = useNavigate();

  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    handelAddReview(tourId, data);
    navigate(`/reviews/${tourId}`);
  };

  return (
    <>
      <PageTitle
        title="Add Review"
        topTitle="Tour Name"
        titlePartOne="Add your review"
        margin="50px 0px"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Input
            inputType="textarea"
            title="Review"
            label="review"
            register={register}
            errors={errors}
            schema={schema.review}
          />
          <Input
            inputType="number"
            title="Rating"
            label="rating"
            register={register}
            errors={errors}
            schema={schema.rating}
            max={5}
          />
        </Box>
        <GlobalButton margin="20px 0" type="submit">
          Submit
        </GlobalButton>
      </form>
    </>
  );
}

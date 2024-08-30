import styled from "styled-components";
import PageTitle from "../../../components/PageTitle";
import { FormProvider } from "react-hook-form";
import Input from "../../../Forms/Input";
import { schema } from "../util/CreateTourSchemaFields";
import { useFieldArray } from "react-hook-form";
import TourLocation from "./TourLocation";
import GlobalButton from "../../../components/GlobalButton";
import PropTypes from "prop-types";

const FormFields = styled.form`
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  margin-bottom: 10px;
  border-radius: 10px;

  h3 {
    grid-column: 1 / 3;
    font-size: 1.2rem;
    font-weight: 400;
    color: #707070;
    margin: 20px 0;
  }

  .mainDetails {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .priceAndImage {
    grid-column: 2 / 3;

    input {
      width: 100%;

      &::file-selector-button {
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 0.7rem;
        font-weight: 300;
        color: #707070;
      }
    }
  }
  .description {
    grid-column: 1 / 3;
  }
  .technicalDetails {
    grid-column: 1 / 2;
  }
  .startLocation {
    grid-column: 2 / 3;
  }

  .locations {
    grid-column: 1 / 2;
  }

  label {
    font-size: 0.8rem;
    font-weight: 300;
    color: #707070;
  }

  .buttons {
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
  .tourImages {
    grid-column: 1 / 3;
    input {
      width: 100%;

      &::file-selector-button {
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 0.7rem;
        font-weight: 300;
        color: #707070;
      }
    }
  }
`;

export default function TourForm({ title, methods, onSubmit, buttonText }) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { fields: imageFields } = useFieldArray({
    name: "images",
    control: control,
  });

  const {
    fields: locationFields,
    append: appendLocation,
    remove: removeLocation,
  } = useFieldArray({
    name: "locations",
    control: control,
  });

  const formType = title;
  let startLocationCoordinates = "startLocationCoordinates";
  let startLocationAddress = "startLocationAddress";
  let startLocationDescription = "startLocationDescription";

  if (formType === "Create Tour") {
    title = "Create Tour";
    buttonText = "Create";
  } else if (formType === "Edit Tour") {
    title = "Edit Tour";
    buttonText = "Update";
    startLocationCoordinates = "startLocation.coordinates";
    startLocationAddress = "startLocation.address";
    startLocationDescription = "startLocation.description";
  }

  return (
    <>
      <PageTitle
        margin={"50px 0"}
        topTitle="Start new adventure"
        title={title}
        titlePartOne="The next big adventure"
        subtitlePartOne="Please fill all the fields"
      />
      <FormProvider {...methods}>
        <FormFields onSubmit={handleSubmit(onSubmit)}>
          <div className="priceAndImage">
            <Input
              inputType="number"
              title="Price"
              label="price"
              register={register}
              errors={errors}
              schema={schema.price}
            />
            <Input
              inputType="input"
              title="Image Cover"
              label="imageCover"
              register={register}
              errors={errors}
              schema={schema.image}
            />
          </div>

          <div className="mainDetails">
            <Input
              inputType="input"
              title="Tour Name"
              label="name"
              register={register}
              errors={errors}
              schema={schema.name}
            />
            <Input
              inputType="input"
              title="Summary"
              label="summary"
              register={register}
              errors={errors}
              schema={schema.summary}
            />
          </div>

          <div className="description">
            <Input
              inputType="textarea"
              title="Description"
              label="description"
              register={register}
              errors={errors}
              schema={schema.description}
            />
          </div>

          <div className="technicalDetails">
            <Input
              inputType="number"
              title="Duration"
              label="duration"
              register={register}
              errors={errors}
              schema={schema.duration}
            />
            <Input
              inputType="number"
              title="Max Group Size"
              label="maxGroupSize"
              defaultValue={15}
              register={register}
              errors={errors}
              schema={schema.maxGroupSize}
            />
            <Input
              inputType="select"
              title="Difficulty"
              label="difficulty"
              register={register}
              errors={errors}
              schema={schema.difficulty}
            />
            <Input
              inputType="date"
              title="Start Date"
              label="startDates"
              register={register}
              errors={errors}
              schema={schema.startDates}
            />
          </div>

          <div className="startLocation">
            <Input
              inputType="input"
              title="Coordinates"
              label={startLocationCoordinates}
              register={register}
              errors={errors}
              schema={schema.coordinates}
            />
            <Input
              inputType="input"
              title="Address"
              label={startLocationAddress}
              register={register}
              errors={errors}
              schema={schema.address}
            />
            <Input
              inputType="input"
              title="Description"
              label={startLocationDescription}
              register={register}
              errors={errors}
              schema={schema.startLocationDescription}
            />
          </div>

          <h3>Images</h3>

          <div className="tourImages">
            {imageFields.map((field, index) => (
              <div key={field.id} className="imageInput">
                <Input
                  label={`images[${index}]`}
                  title={`Image URL ${index + 1}`}
                  inputType="input"
                  register={register}
                  errors={errors}
                  schema={schema.image}
                />
              </div>
            ))}
          </div>

          <h3>Locations</h3>
          <div className="locations">
            <TourLocation
              register={register}
              control={control}
              fields={locationFields}
              append={appendLocation}
              remove={removeLocation}
              reset={reset}
            />
          </div>

          <div className="buttons">
            <GlobalButton margin={"0px"} type="submit">
              {buttonText}
            </GlobalButton>
            <GlobalButton
              backgroundColor={"#ffffff"}
              color={"#f3711b"}
              border="#f3711b"
              borderColor={"#f3711b"}
              hover={"#f3711b"}
              onClick={() => reset()}
            >
              Reset
            </GlobalButton>
          </div>
        </FormFields>
      </FormProvider>
    </>
  );
}

TourForm.propTypes = {
  title: PropTypes.string.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

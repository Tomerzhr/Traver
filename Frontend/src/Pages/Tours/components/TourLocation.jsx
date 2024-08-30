import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import styled from "styled-components";
import GlobalButton from "../../../components/GlobalButton";

const TourLocationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, minmax(30px, auto));
  column-gap: 10px;
  div:last-of-type {
    grid-column: 1/2;
  }

  .control {
    display: flex;
    flex-direction: column;
    label {
      font-size: 0.8rem;
      font-weight: 500;
      color: #707070;
    }
  }
  input {
    padding: 5px;
    width: 100%;
    border: 1px solid #e68c4c5c;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: 300;
    margin: 5px 0;
    color: #707070;

    &:focus {
      outline: none;
      border: 1px solid #e68c4c;
    }
  }
`;

export default function TourLocation({ fields, append, remove, control }) {
  return (
    <TourLocationContainer>
      {fields.map((item, index) => (
        <div className="location" key={item.id}>
          <div className="control">
            <label htmlFor={`locations.${index}.name`}>Location Name</label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  id={`locations.${index}.name`}
                  value={field.value || ""}
                  placeholder="Enter location name"
                />
              )}
              name={`locations.${index}.name`}
              control={control}
              rules={{ required: "Location Name is required" }}
            />
          </div>

          <div className="control">
            <label htmlFor={`locations.${index}.type`}>Type</label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  id={`locations.${index}.type`}
                  value={field.value || ""}
                  placeholder="Enter type"
                />
              )}
              name={`locations.${index}.type`}
              control={control}
              rules={{ required: "Type is required" }}
            />
          </div>

          <div className="control">
            <label htmlFor={`locations.${index}.coordinates`}>Coordinates</label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  id={`locations.${index}.coordinates`}
                  value={field.value || ""}
                  placeholder="Enter coordinates"
                />
              )}
              name={`locations.${index}.coordinates`}
              control={control}
              rules={{ required: "Coordinates are required" }}
            />
          </div>

          <div className="control">
            <label htmlFor={`locations.${index}.description`}>Description</label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  value={field.value || ""}
                  id={`locations.${index}.description`}
                  placeholder="Enter description"
                />
              )}
              name={`locations.${index}.description`}
              control={control}
              rules={{ required: "Description is required" }}
            />
          </div>

          <div className="control">
            <label htmlFor={`locations.${index}.day`}>Day</label>
            <Controller
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  id={`locations.${index}.day`}
                  value={field.value || ""}
                  placeholder="Enter day"
                />
              )}
              name={`locations.${index}.day`}
              control={control}
              rules={{ required: "Day is required" }}
            />
          </div>
          {index > 0 && (
            <GlobalButton margin={"5px 0px"} onClick={() => remove(index)}>
              Remove Location
            </GlobalButton>
          )}
        </div>
      ))}
      <div>
        <GlobalButton margin={"5px 0px"} onClick={() => append({})}>
          Add Location
        </GlobalButton>
      </div>
    </TourLocationContainer>
  );
}

TourLocation.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  append: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
};

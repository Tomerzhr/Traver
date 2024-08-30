import useTours from "./hooks/UseTours";
import { useEffect } from "react";
import ToursFeedback from "./components/ToursFeedback";
import GlobalPagination from "../../components/GlobalPagination";
import PageTitle from "../../components/PageTitle";

export default function ToursPage() {
  const {
    handelGetTours,
    handelDeleteTour,
    setPage,
    page,
    toursPerPage,
    values: { tours, loading, error },
  } = useTours();

  useEffect(() => {
    handelGetTours();
  }, []);

  const onDeleteTour = async (id) => {
    await handelDeleteTour(id);
    await handelGetTours();
  };

  //Get current tours
  const indexOfLastTour = page * toursPerPage; //6
  const indexOfFirstTour = indexOfLastTour - toursPerPage; //0
  const currentTours = tours?.slice(indexOfFirstTour, indexOfLastTour);

  //Change page

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <PageTitle
        margin={"50px 0"}
        topTitle="This is our next adventures"
        title="Latest Tours"
        titlePartOne="Check out our amazing tours!"
        subtitlePartOne="Amazing tours for you to enjoy"
      />

      <ToursFeedback tours={currentTours} loading={loading} error={error} onDelete={onDeleteTour} />
      <GlobalPagination
        cardsPerPage={toursPerPage}
        totalCards={tours?.length}
        paginate={paginate}
      />
    </div>
  );
}

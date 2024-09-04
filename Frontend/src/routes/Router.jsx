import { Routes, Route } from "react-router-dom";
import ROUTS from "./routesModal";
import Home from "../Pages/Home/Home";
import ToursPage from "../Pages/Tours/ToursPage";
import About from "../Pages/About";
import Contact from "../Pages/Contact/Contact";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import Profile from "../Users/profile/Profile";
import CreateTour from "../Pages/Tours/CreateTour";
import TourPageDetails from "../Pages/Tours/TourPageDetails";
import ErrorPage from "../Pages/ErrorPage";
import EditTour from "../Pages/Tours/EditTour";
import Reviews from "../Pages/Reviews/Reviews";
import AddReview from "../Pages/Reviews/AddReview";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={ROUTS.TOURS} element={<ToursPage />} />
      <Route path={ROUTS.ABOUT} element={<About />} />
      <Route path={ROUTS.CONTACT} element={<Contact />} />
      <Route path={ROUTS.LOGIN} element={<LoginPage />} />
      <Route path={ROUTS.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTS.USER_PROFILE} element={<Profile />} />
      <Route path={ROUTS.CREATE_TOUR} element={<CreateTour />} />
      <Route path={`${ROUTS.EDIT_TOUR}/:tourId`} element={<EditTour />} />
      <Route path={`${ROUTS.TOUR_DETAILS}/:tourId`} element={<TourPageDetails />} />
      <Route path={`${ROUTS.REVIEWS}/:tourId`} element={<Reviews />} />
      <Route path={`${ROUTS.CREATE_REVIEW}/:tourId`} element={<AddReview />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

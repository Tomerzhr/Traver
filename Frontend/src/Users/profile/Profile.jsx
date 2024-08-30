import { useState } from "react";
import styled from "styled-components";
import SettingsIcon from "../../assets/icons/setting.svg";
import WorkOutlineIcon from "../../assets/icons/booking.svg";
import HttpsIcon from "../../assets/icons/reviews.svg";
import Setting from "./components/SettingDisplay";
import PageTitle from "../../components/PageTitle";
import SearchBar from "../../Pages/Home/components/ToursSection/SearchBar";
import { Box } from "@mui/material";

const AccountSettingsContainer = styled(Box)`
  font-size: 0.8rem;
  font-weight: 300;
  color: #707070;
  margin: 40px 0px;
`;

export default function Profile() {
  const [settingOption, setSettingOption] = useState("Settings");

  return (
    <>
      <PageTitle
        topTitle="Control panel"
        title="Account Settings"
        titlePartOne="Personal Control Panel"
        subtitlePartOne={"Manage your account settings"}
        margin="50px 0px"
      />
      <SearchBar
        xs="100%"
        md="60vw"
        top="-20px"
        optionOneTitle="Settings"
        optionOneLink={() => setSettingOption("Settings")}
        optionOneSubtitle="Main settings"
        optionOneImg={SettingsIcon}
        optionTwoTitle="My Booking"
        optionTwoLink={() => setSettingOption("myBooking")}
        optionTwoSubtitle="Manage your booking"
        optionTwoImg={WorkOutlineIcon}
        optionTreeTitle="My Reviews"
        optionTreeLink={() => setSettingOption("my reviews")}
        optionTreeSubtitle="Manage your reviews"
        optionTreeImg={HttpsIcon}
        optionFourTitle="Billing"
        optionFourSubtitle="Manage your billing"
        optionFourImg={HttpsIcon}
        optionFourLink={() => setSettingOption("billing")}
      />
      <AccountSettingsContainer component="section" sx={{ width: { xs: "100vw", md: "50vw" } }}>
        {settingOption === "Settings" && <Setting />}
        {settingOption === "myBooking" && <h2>My Booking</h2>}
        {settingOption === "billing" && <h2>Billing</h2>}
        {settingOption === "my reviews" && <h2>My Reviews</h2>}
      </AccountSettingsContainer>
    </>
  );
}

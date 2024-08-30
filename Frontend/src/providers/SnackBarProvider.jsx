import { useCallback, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";

const SnackBarContext = createContext();

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export default function SnackBarProvider({ children }) {
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarColor, setSnackBarColor] = useState("success");

  const setSnack = useCallback((message, color) => {
    setSnackBarMessage(message);
    setSnackBarColor(color);
    setIsSnackBarOpen(true);
  }, []);

  return (
    <>
      <Snackbar
        ContentProps={{
          sx: {
            backgroundColor: snackBarColor === "success" ? "#f3711b" : "#525252",
            borderRadius: "10px",
            fontWeight: "300",
            fontStyle: "italic",
          },
        }}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isSnackBarOpen}
        autoHideDuration={5000}
        onClose={() => setIsSnackBarOpen(false)}
        message={snackBarMessage}
        color={snackBarColor}
      />
      <SnackBarContext.Provider value={setSnack}>{children}</SnackBarContext.Provider>
    </>
  );
}

export const useSnackBarProvider = () => {
  const context = useContext(SnackBarContext);
  if (!context) {
    throw new Error("useSnackBar must be used within a SnackBarProvider");
  }
  return context;
};

SnackBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

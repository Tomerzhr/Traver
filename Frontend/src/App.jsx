import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Router from "./routes/Router";
import { UserProvider } from "./Users/providers/userProvider";
import SnackBarProvider from "./providers/SnackBarProvider";
import CartProvider from "./store/providers/CartProvider";
import UserProgressProvider from "./store/providers/UserProgressProvider";

function App() {
  return (
    <BrowserRouter>
      <SnackBarProvider>
        <UserProgressProvider>
          <CartProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </CartProvider>
        </UserProgressProvider>
      </SnackBarProvider>
    </BrowserRouter>
  );
}

export default App;

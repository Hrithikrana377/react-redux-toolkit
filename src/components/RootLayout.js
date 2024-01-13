import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../store/store";
import NavbarNeeded from "./Navbar";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarNeeded />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;

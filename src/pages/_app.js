import AuthProvider from "@/context/AuthContext";
import "../../styles/globals.css";
import {Toaster} from "react-hot-toast"
import { wrapper } from "src/redux/store";
import { useEffect } from "react";
import { loadUserData } from "src/redux/user/userActions";
import { useStore } from "react-redux";

function App({ Component, pageProps }) {
  const store = useStore();

  useEffect(() => {
    loadUserData(store);
  }, []);
  return (
            <>
              <Component {...pageProps} />
              <Toaster/>
            </>
          );
}

export default wrapper.withRedux(App)
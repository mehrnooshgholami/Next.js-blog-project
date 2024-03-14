import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";

const AuthContext = createContext()

const AuthContextDispather = createContext()

const initial={user:null,loading:false,error:null}

const reducer = (state, action) => {
    switch (action.type) {
      case "SIGNIN_PENDING":
        return { user: null, error: false, loading: true };
      case "SIGNIN_SUCCESS":
        return { loading: false, error: null, user: action.payload };
      case "SIGNIN_REJECT":
        return { error: action.error, loading: false, user: null };
      default:
        return { ...state };
    }
  };

const asyncActionHandlers = {
    SIGNIN:({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, { withCredentials: true })
        .then(({ data }) => {
          toast.success(`${data.name} خوش آمدی!`);
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message });
          toast.error(err?.response?.data?.message);
        });
    },
    SIGNUP:({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
    axios
        .post("http://localhost:5000/api/user/signup", action.payload, { withCredentials: true })
        .then(({ data }) => {
          toast.success(`${data.name} خوش آمدی!`);
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: err?.response?.data?.message });
          toast.error(err?.response?.data?.message);
        });
    },
    SIGNOUT:{}
}



const AuthProvider = ({children}) => {

    const [user,dispath] = useReducerAsync(reducer,initial,asyncActionHandlers)

    return (
        <AuthContext.Provider value={user}>
            <AuthContextDispather.Provider value={dispath}>
                {children}
            </AuthContextDispather.Provider>
        </AuthContext.Provider>
    )
}
 
export default AuthProvider;

export const useAuth = () => useContext(AuthContext)

export const useAuthActions = () => useContext(AuthContextDispather)
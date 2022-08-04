import { Outlet } from "react-router-dom";
import Login from "./Login"
import { useAuthStore } from "./stores/auth.js"

const useAuth = () => {
  // const user = { loggedIn: false };
  // return user && user.loggedIn;
  const {token} = useAuthStore();
  return !!token 
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export {useAuth, ProtectedRoutes}
import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";

export default function PrivateRoute() {
   const { user: currentUser } = useUser();
   return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";

function ProtectedRoute({element : Component}) {
    
    const {isLoggedIn, loading, user} = useAuth();
    if (loading) return <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}><CircularProgress /></div>

    return isLoggedIn ? <Component /> : <Navigate to="/login" replace />
}

export default ProtectedRoute;
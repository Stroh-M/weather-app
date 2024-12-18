import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({element : Component}) {
    
    const {isLoggedIn, loading, user} = useAuth();
    if (loading) return <p>Loading</p>

    return isLoggedIn ? <Component /> : <Navigate to="/login" replace />
}

export default ProtectedRoute;
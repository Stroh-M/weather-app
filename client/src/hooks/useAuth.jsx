import axios from "axios";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({})

  useEffect(() => {
    const checkAutentication = async () => {
      try {
        const result = await axios.post(
          "http://localhost:5000/check-auth",
          {},
          { withCredentials: true }
        );
        setIsLoggedIn(result.data.isLoggedIn);
        setUser(result.data.user);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAutentication();
  }, []);

  return {isLoggedIn, loading, user};
}

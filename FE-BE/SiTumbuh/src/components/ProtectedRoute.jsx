import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/authContext";

export function RequireAuth({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
}

export function UnauthenticatedOnly({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const unauthenticatedRoutesOnly = ["/login", "/register"];

  useEffect(() => {
    if (isLoggedIn && unauthenticatedRoutesOnly.includes(location.pathname)) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, location, navigate]);

  return (!isLoggedIn || !unauthenticatedRoutesOnly.includes(location.pathname)) ? children : null;
}
import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";

export const useAuth = () => useContext(AuthContext);
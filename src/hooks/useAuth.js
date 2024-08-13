import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
 // Create the context
export const useAuth = () => useContext(AuthContext);
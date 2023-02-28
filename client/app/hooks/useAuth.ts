import { AuthContext } from "providers/authProvider/AuthProvider";
import { useContext } from "react";

export const useAuth = ()=> useContext(AuthContext)
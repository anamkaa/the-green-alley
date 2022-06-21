import { useAuth } from "../context/auth-context";

export const LoginText = () => {
  const {
    user: { userInfo },
  } = useAuth();

  return userInfo?.firstName ?? "login";
};

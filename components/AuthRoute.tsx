import useAuth from "@/hooks/queries/useAuth";
import { router, useFocusEffect } from "expo-router";
import { ReactNode } from "react";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  const { auth } = useAuth();
  useFocusEffect(() => {
    !auth.id && router.replace("/auth");
  });

  return <>{children}</>;
};
export default AuthRoute;

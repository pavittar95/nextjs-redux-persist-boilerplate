import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import PreLoginLayout from "../components/layout/preLoginLayout";
import LoginForm from "../components/login/loginform";
export default function Login() {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.token) {
      router.push("/");
    }
  }, [user.token]);
  return (
    <PreLoginLayout>
      <div className="row">
        <div className="col-md-3 col-sm-8 m-auto">
          {!user.token && <LoginForm />}
        </div>
      </div>
    </PreLoginLayout>
  );
}

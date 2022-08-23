import { Component, useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";

interface IAuthProps {
  token: string;
  component: JSX.Element;
}

export const Private = ({ component }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, [component]);

  console.log(token);
  console.log(component);

  if (!!token) {
    return <Navigate to="/" />;
  }
  return component;
};

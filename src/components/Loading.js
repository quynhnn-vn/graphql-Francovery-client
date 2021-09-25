import React from "react";
import "../styles/Loading.scss";
import { FiLoader } from "react-icons/fi";

/*
  Component for loading state
*/
export default function Loading({ name }) {
  return <FiLoader className={`loading ${name}`} />;
}

import React from "react";
import "../styles/Loading.scss";
import { FiLoader } from "react-icons/fi";

export default function Loading({ name }) {
  return <FiLoader className={`loading ${name}`} />;
}

import React from "react";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { category } = useParams();

  return <div>Category {category}</div>;
};

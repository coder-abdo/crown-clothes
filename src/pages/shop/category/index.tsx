import { useParams } from "@tanstack/react-router";

export const Category = () => {
  const {category} = useParams({})
  return <div style={{color: "#333", fontSize: "50px"}}>category is {category}</div>;
};

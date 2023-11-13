import { FC } from "react";
import { CategoryType } from "@/types";
import { useNavigate } from "@tanstack/react-router";
interface Props {
  category: CategoryType;
}
export const Category: FC<Props> = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate()
  const handleClick = () => {
    navigate({to: `/shop/${title}`})
  }
  return (
    <section
      className="category"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="category__container">
        <h1 className="category__title">{title}</h1>
        <button className="btn btn__cto" role="link" onClick={handleClick}>shop now</button>
      </div>
    </section>
  );
};

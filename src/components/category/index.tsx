import React, { FC } from "react";
import { CategoryType } from "../../types";
import './style.scss'
interface Props {
  category: CategoryType;
}
export const Category: FC<Props> = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <section
      className="category"
      style={{
        backgroundImage: `url(${imageUrl})`,
        objectFit: "cover",
      }}
    >
      <div className="category__container">
        <h1 className="category__title">{title}</h1>
        <button className="btn btn__cto">shop now</button>
      </div>
    </section>
  );
};

import { FC } from "react";
import { CategoryType } from "../../types";
import "./style.scss";
import { Category } from "../category";
interface Props {
  categories: CategoryType[];
}
export const Categories: FC<Props> = ({ categories }) => {
  return (
    <main className="categories">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </main>
  );
};

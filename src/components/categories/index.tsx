import { FC } from "react";
import { CategoryType } from "@/types";
import { Category } from "@/components/category";
interface Props {
  categories: CategoryType[];
}
export const Categories: FC<Props> = ({ categories }) => {
  return (
    <main className="categories">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </main>
  );
};

import { FC, ReactNode } from "react";

interface Props {
  label: string;
  message?: string;
  isError?: boolean;
  children: ReactNode;
}
export const FormControl: FC<Props> = ({
  label,
  message,
  isError,
  children,
}) => {
  return (
    <div className="form-control">
      {children}
      <label className="label">{label}</label>
      {isError && <p>{message}</p>}
    </div>
  );
};

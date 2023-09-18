import { PropsWithChildren } from "react";

import "./styles.css";

interface ContainerProps {
  className?: string;
}

export const Container = (props: PropsWithChildren<ContainerProps>) => {
  const { children, className } = props;
  return (
    <div className={`container ${className ? className : ""}`}>{children}</div>
  );
};

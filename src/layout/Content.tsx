import { PropsWithChildren } from "react";

import "./styles.css";

export const Content = (props: PropsWithChildren) => {
  const { children } = props;
  return <div className="content">{children}</div>;
};

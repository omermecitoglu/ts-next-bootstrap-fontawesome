import "~/styles/custom-bootstrap.scss";
import React, { type ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode,
};

const AppLayout = ({
  children,
}: AppLayoutProps) => {
  return (
    <div>{children}</div>
  );
};

export default AppLayout;

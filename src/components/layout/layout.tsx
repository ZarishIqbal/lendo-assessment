import React from "react";

import { AppHeader } from "./header";
import { Sidebar } from "./sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Sidebar>{children}</Sidebar>
    </>
  );
};

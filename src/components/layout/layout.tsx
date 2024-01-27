import React from "react";

import { Sidebar } from "./sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
  renderHeader?: boolean;
  renderSidebar?: boolean;
  docTitle?: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
};

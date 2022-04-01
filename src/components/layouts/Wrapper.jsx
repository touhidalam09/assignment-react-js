import React, { useEffect } from "react";

const Wrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = title || "Assignment - softzino";
  }, [title]);
  return <>{children}</>;
};
export default Wrapper;

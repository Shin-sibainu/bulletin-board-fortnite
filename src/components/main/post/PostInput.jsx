import React from "react";

export const PostInput = ({ children }) => {
  return (
    <div>
      {children}
      <input className="input" type="text" />
    </div>
  );
};

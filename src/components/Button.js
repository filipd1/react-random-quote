import React from "react";

export const Button = ({ onClick, color, value, isDis }) => {
  return (
    <input
      className={`btn btn-${color} ${isDis && "btn-disabled"}`}
      onClick={onClick}
      type="submit"
      value={value}
      disabled={isDis ? true : false}
    />
  );
};

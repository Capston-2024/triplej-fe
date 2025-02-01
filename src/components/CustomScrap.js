import React, { useState } from "react";

const CustomScrap = ({ type: initialType }) => {
  const [type, setType] = useState(initialType);

  const toggleType = () => {
    setType((prevType) => (prevType === "scrap" ? "line" : "scrap"));
  };

  const isScrap = type === "scrap";
  const isLine = type === "line";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleType}
    >
      <path
        d="M12.3859 16.0569L12 15.8254L11.6141 16.0569L4.75 20.1754V4.25H19.25V20.1754L12.3859 16.0569Z"
        fill={isScrap ? "#0098FF" : "none"}
        stroke={isLine ? "#98A2B3" : "#0098FF"}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default CustomScrap;

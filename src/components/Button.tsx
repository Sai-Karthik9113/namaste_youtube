import React from "react";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="px-4 py-2 m-2 bg-gray-200 text-sm font-medium cursor-pointer rounded-lg">
      {name}
    </button>
  );
};

export default Button;

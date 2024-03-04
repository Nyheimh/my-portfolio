import React from "react";

const Card = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8">
      <div className="w-290 h-64 rounded-lg bg-gray-200 p-8  shadow-lg md:w-96">
        <div className="text-l mb-4 font-bold">{label}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;

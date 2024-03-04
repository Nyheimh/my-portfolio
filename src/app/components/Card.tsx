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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="w-full rounded-lg bg-gray-200 p-8 shadow-lg md:w-96">
          <div className="mb-4 text-2xl font-bold">{label}</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

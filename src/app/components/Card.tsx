import React from "react";

const Card = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-auto h-56 w-full max-w-sm rounded-lg bg-zinc-200  p-8 shadow-lg md:w-96">
      <div className="mb-4 text-lg font-bold">{label}</div>
      <div>{children}</div>
    </div>
  );
};

export default Card;

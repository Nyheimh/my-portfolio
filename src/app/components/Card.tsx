import React from "react";

const Card = ({
  label,
  link,
  children,
}: {
  label: string;
  link: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mx-auto h-56 w-full max-w-sm rounded-lg bg-zinc-200  p-8 shadow-lg md:w-96">
      <a href={link} target="_blank" className="class=bg-transparent">
        <div className="mb-4 text-lg font-bold">{label}</div>
        <div>{children}</div>
      </a>
    </div>
  );
};

export default Card;

import React from "react";

const Headers = () => {
  return (
    <div className="flex justify-between p-5">
      {" "}
      <h1 className="p-1 text-3xl font-bold text-blue-600">Nyheim Hunter</h1>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300">
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Headers;

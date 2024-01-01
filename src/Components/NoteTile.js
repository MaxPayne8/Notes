import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSure } from "../Utils/noteSlice";

const NoteTile = ({ title, description, date }) => {
  const newDesc = description.substring(0, 190);

  return (
    <div className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-lg border-black border-2 bg-slate-300 p-2 m-10 tranform hover:scale-110 md:hover:scale-125 transition ease-in-out group">
      <h1 className="text-center text-xl ">{title}</h1>
      <p className="mt-2 overflow-hidden">
        {newDesc.length < 190 ? newDesc : newDesc + "..."}
      </p>
      <label className="absolute top-2 left-2 group-hover:opacity-0">📌</label>
      <label className="absolute -bottom-0 -right-0 rounded-md group-hover:opacity-0 bg-slate-600  text-slate-200 px-1">
        {date}
      </label>
    </div>
  );
};

export default NoteTile;

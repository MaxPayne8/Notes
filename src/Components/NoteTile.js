import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSure } from "../Utils/noteSlice";

const NoteTile = ({ title, description, date }) => {
  const newTitle = title.substring(0, 15);
  const newDesc = description.substring(0, 190);
  const newDescMobile = description.substring(0, 75);

  return (
    <div className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-lg border-black border-2 bg-slate-300 p-2 m-10 tranform hover:scale-110 md:hover:scale-125 transition ease-in-out group">
      <h1 className="text-center text-xl break-words ">{newTitle}</h1>
      {newDesc.length ? (
        <p
          dangerouslySetInnerHTML={{
            __html: newDesc.length < 190 ? newDesc : `${newDesc}...`,
          }}
          className="mt-2 break-words hidden md:block"
        />
      ) : (
        <></>
      )}
      {newDescMobile.length ? (
        <p
          dangerouslySetInnerHTML={{
            __html:
              newDesc.lenghth < 75 ? newDescMobile : `${newDescMobile}...`,
          }}
          className="mt-2 break-words block md:hidden"
        />
      ) : (
        <></>
      )}

      {/* {} */}

      <label className="absolute top-2 left-2 group-hover:opacity-0">📌</label>
      <label className="absolute -bottom-0 -right-0 rounded-md group-hover:opacity-0 text-sm md:text-base bg-slate-600  text-slate-200 px-1">
        {date}
      </label>
    </div>
  );
};

export default NoteTile;

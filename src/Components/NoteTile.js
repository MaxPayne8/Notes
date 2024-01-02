import React from "react";

const NoteTile = ({ title, description, date }) => {
  const newTitle = title.substring(0, 15);
  const newDesc = description.substring(0, 150);
  const newDescMobile = description.substring(0, 75);

  return (
    <div className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-lg shadow-lg shadow-slate-700 border-black border-2 bg-slate-300 p-2 m-10 tranform hover:scale-110 md:hover:scale-125 transition ease-in-out group">
      <h1 className="text-center  sm:text-xl break-words ">
        {newTitle.length < 15 ? title : `${newTitle}..`}
      </h1>
      {newDesc.length ? (
        <p
          dangerouslySetInnerHTML={{
            __html: newDesc.length < 150 ? newDesc : `${newDesc}..`,
          }}
          className="mt-2 break-all h-[165px] hidden md:block overflow-y-hidden "
        />
      ) : (
        <></>
      )}
      {newDescMobile.length ? (
        <p
          className="mt-2 break-all h-[120px] block md:hidden overflow-y-hidden "
          dangerouslySetInnerHTML={{
            __html: newDesc.length < 75 ? newDescMobile : `${newDescMobile}..`,
          }}
        />
      ) : (
        <></>
      )}

      <label className="absolute top-0 left-0 group-hover:opacity-0">📌</label>
      <label className="absolute -bottom-0 -right-0 rounded-md group-hover:opacity-0 text-sm md:text-base bg-slate-600  text-slate-200 px-1">
        {date}
      </label>
    </div>
  );
};

export default NoteTile;

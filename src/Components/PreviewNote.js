import React from "react";
import { useParams } from "react-router-dom";

const PreviewNote = () => {
  const { id } = useParams();
  console.log(id);
  var getNotes = JSON.parse(window.localStorage.getItem("Notes"));
  console.log(getNotes);
  const getNotes1 = getNotes.filter((note) => note.id == id);
  console.log(getNotes1);
  const { title, date, description } = getNotes1[0];
  return (
    <div className="p-2 m-2 bg-slate-900 min-h-screen text-slate-200 rounded-lg">
      <h1 className="text-center text-2xl p-2 m-2 break-words"> {title}</h1>
      <h1 className="text-center p-2 m-2">({date})</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
        className=" p-2 m-2 break-words"
      />
    </div>
  );
};

export default PreviewNote;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateCard } from "../Utils/noteSlice";
import ReactQuill from "react-quill";

const UpdateNote = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  var getNotes = JSON.parse(window.localStorage.getItem("Notes"));
  console.log(getNotes);
  const getNotes1 = getNotes.filter((note) => note.id == id);

  console.log(getNotes1);

  const [title, setTitle] = useState(getNotes1[0].title);
  const [content, setContent] = useState(getNotes1[0].description);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (title.length) {
      dispatch(
        updateCard({
          id: id,
          title: title,
          description: content,
        })
      );
      navigate("/");
    } else {
      showError(true);
    }
    e.preventDefault();
  };

  const [error, showError] = useState(false);

  return (
    <div className="flex justify-center items-center  text-slate-200 font font-semibold h-screen">
      <img
        src="https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149018547.jpg"
        alt="background"
        className="absolute top-14 right-0 left-0 hidden md:block h-screen w-full"
      />
      <img
        src="https://w.forfun.com/fetch/7a/7a335c4d4abc7c628d0470d44c82f76b.jpeg "
        alt="background"
        className="absolute top-14 right-0 left-0  h-screen w-full md:hidden"
      />
      <form
        className="w-96 bg-violet-500 rounded-lg z-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col p-2 my-4">
          <label className="p-2 m-2">Enter title*</label>
          <input
            value={title}
            type="text"
            className="text-slate-900 p-2 m-2 rounded-lg"
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && (
            <label className="text-red-700 ml-4 font-semibold">
              Title is required!!
            </label>
          )}
        </div>
        <div className="flex flex-col p-2 my-4">
          <label className="p-2 m-2">Description</label>

          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="h-28"
          />
        </div>
        <button className="p-2 flex mx-auto mt-16 bg-slate-700 text-white rounded-lg mb-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateNote;

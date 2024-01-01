import React from "react";
import SideBar from "./SideBar";
import NoteTile from "./NoteTile";
import { useDispatch, useSelector } from "react-redux";
import { addIndex, deleteNote, setSure } from "../Utils/noteSlice";
import { Link } from "react-router-dom";

const Home = () => {
  ///snd
  const getNotes = JSON.parse(window.localStorage.getItem("Notes"));
  const dispatch = useDispatch();
  console.log(getNotes);
  const { sure, index, notes } = useSelector((store) => store.note);
  console.log(sure);
  console.log(notes);

  return (
    <div className="flex  ">
      <SideBar />

      <div className="relative w-full bg-slate-200 min-h-screen  ">
        {!getNotes.length ? (
          <div className="flex justify-center items-center mt-28 flex-col">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/746/386/small/still-empty-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
              alt="empty"
              className="rounded-full"
            />
            <h1 className="font-semibold">No Notes Added</h1>
          </div>
        ) : (
          <div className="flex flex-wrap justify-evenly m-4   ">
            {getNotes?.map((note, index) => (
              <div className="relative group">
                <NoteTile
                  title={note.title}
                  description={note.description}
                  date={note.date}
                />
                <Link to={"/edit/" + note.id}>
                  <button className="absolute font-semibold bottom-11 left-11 opacity-0 group-hover:opacity-100 bg-blue-500 hover:bg-blue-700 p-1 sm:p-2 rounded-lg">
                    Edit
                  </button>
                </Link>

                <button
                  className="absolute bottom-11 font-semibold right-11 opacity-0 group-hover:opacity-100 bg-red-500 hover:bg-red-700 p-1 sm:p-2 rounded-lg"
                  onClick={() => {
                    dispatch(addIndex(note.id));
                    dispatch(setSure(true));
                    window.scroll(0, 0);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        {sure && (
          <div className="absolute top-0 bottom-0 right-0 left-0 backdrop-blur-sm">
            <h1 className="text-center mt-[70%] sm:mt-[15%] text-xl">
              Are you sure?
            </h1>
            <div className="flex justify-center">
              <label
                className="m-6 tranform hover:scale-150 p-2 scale-125 transition ease-in-out "
                onClick={() => {
                  dispatch(deleteNote(index));
                  dispatch(setSure(false));
                }}
              >
                ✅
              </label>
              <label
                className="m-6 tranform hover:scale-150 p-2 scale-125 transition ease-in-out"
                onClick={() => dispatch(setSure(false))}
              >
                ❌
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

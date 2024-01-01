import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../Utils/noteSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import JoditEditor from "jodit-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddNewNote = () => {
  const editor = useRef("");
  const title = useRef(null);
  const description = useRef(null);
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const { notes } = useSelector((store) => store.note);

  const navigate = useNavigate();

  const [error, showError] = useState(false);

  const [datas, setDatas] = useState([]);

  const handleSubmit = (e) => {
    // console.log(datas);
    // window.localStorage.setItem("data", JSON.stringify(datas));
    console.log(datas);
    e.preventDefault();
    var currentdate = new Date();
    var datetime =
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      " - " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear();

    if (title.current.value) {
      setDatas((prev) => [
        ...prev,
        {
          title: title.current.value,
          description: content,
          id: uuidv4(),
          date: datetime,
        },
      ]);

      setTimeout(() => navigate("/"), 100);
    } else {
      showError(true);
    }
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setDatas(data);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(datas));
    const getNotes = JSON.parse(window.localStorage.getItem("Notes"));
    dispatch(addNote(getNotes));
  }, [datas]);

  return (
    <div className="flex justify-center items-center relative  text-slate-200 font font-semibold h-screen">
      <img
        src="https://t4.ftcdn.net/jpg/01/31/15/51/360_F_131155172_4ZVdaT7YF5yJHqircjy59DDxV6aWFds9.jpg"
        alt="background"
        className="absolute top-0 right-0 left-0 hidden md:block h-screen w-full"
      />
      <img
        src="https://marketplace.canva.com/EAFW7eSaHnY/1/0/900w/canva-blue-abstract-wave-phone-wallpaper-k7iCjgKKe80.jpg "
        alt="background"
        className="absolute top-0 right-0 left-0  h-screen w-full md:hidden"
      />
      <form
        className="w-96   bg-blue-500 rounded-lg z-10 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col p-2 my-4">
          <label className="p-2 m-2">Enter title*</label>
          <input
            ref={title}
            type="text"
            className="text-slate-900 p-2 m-2 rounded-lg"
          />
          {error && (
            <label className="text-red-700 ml-4 font-semibold">
              Name is required!!
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
        <button className="p-2 flex mx-auto bg-slate-700 text-white rounded-lg mt-16 mb-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;

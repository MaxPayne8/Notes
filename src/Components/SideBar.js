import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="  w-20  bg-blue-400 min-h-screen ">
      <Link to="/add">
        <div className=" tranform hover:scale-110 transition mt-20 py-10">
          <h1 className="text-center font-semibold p-2 ">Create new Note</h1>
          <img
            className="w-[60%] mx-auto rounded-lg"
            src="https://img.freepik.com/premium-psd/add-new-note-reminder-front-view-3d-rendering-icon-illustration-transparent-background_557469-1732.jpg?w=2000"
            alt="add-card"
          />
        </div>
      </Link>
    </nav>
  );
};

export default SideBar;

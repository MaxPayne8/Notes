import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [greetText, setGreetText] = useState("");
  const currentDate = new Date();
  const day = currentDate.toLocaleDateString("default", { weekday: "long" });
  const month = currentDate.toLocaleString("default", { month: "long" });
  const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  useEffect(() => {
    let currentHour = currentDate.getHours();
    if (currentHour < 12) setGreetText("Good Morning!");
    else if (currentHour < 18) setGreetText("Good Afternoon!");
    else setGreetText("Good Evening!");
  }, []);

  return (
    <div className="bg-blue-400 p-2 flex ">
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3208/3208820.png"
          alt="app-logo"
          className="w-10 h-10 mx-3 hover:scale-110 transition ease-in-out"
        />
      </Link>

      <div className="flex justify-evenly text-sm w-full sm:text-xl items-center">
        <div className="group hover:cursor-pointer w-40 ml-4 sm:ml-0">
          <h1 className="group-hover:hidden">{greetText}</h1>
          <h1 className="hidden group-hover:block">Have a nice Day!!</h1>
        </div>

        <h1>{date}</h1>
      </div>
    </div>
  );
};

export default Header;

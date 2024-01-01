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
          className="w-10 h-10 mx-3"
        />
      </Link>

      <div className="flex justify-evenly text-base w-full md:text-xl items-center">
        <h1>{greetText}</h1>
        <h1>{date}</h1>
      </div>
    </div>
  );
};

export default Header;

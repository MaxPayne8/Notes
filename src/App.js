import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import appStore from "./Utils/appStore";
import { Provider } from "react-redux";
import Header from "./Components/Header";

import Home from "./Components/Home";
import AddNewNote from "./Components/AddNewNote";
import UpdateNote from "./Components/UpdateNote";
import PreviewNote from "./Components/PreviewNote";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add", element: <AddNewNote /> },
      { path: "/edit/:id", element: <UpdateNote /> },
      { path: "/preview/:id", element: <PreviewNote /> },
    ],
  },
]);

export default App;

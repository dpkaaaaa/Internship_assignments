import React from "react";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";       /* if declarative mode use garne ho vaye chai yo use garne {Routes, Route} */
import Login from "./pages/Login";
import Home from "./pages/Home";


//Declarative mode
// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }


//Data Mode
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



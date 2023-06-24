import { RouterProvider } from "react-router-dom";

import { router } from "./components/Layout/MainRouter";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
